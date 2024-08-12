'use client';
import React, { useEffect } from 'react';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';

import { RiLockPasswordFill, RiMailFill } from 'react-icons/ri';
import { loginServices } from '@/lib/services/auth.service';
import { LoginSchema } from '@/lib/schema/auth.schema';
import { Button } from './button';

const SigninForm = () => {
  const { data: session } = useSession();
  const params = useSearchParams();
  const router = useRouter();
  let callbackUrl = params.get('callbackUrl') || '/';
  useEffect(() => {
    if (session && session.user) {
      if (session?.user?.role === 'HRD') {
        router.push('/admin');
      } else {
        router.push(callbackUrl);
      }
    }
  }, [callbackUrl, params, router, session]);

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    const response = await loginServices(values);
    if (response?.error) {
      return toast.error('Login Gagal!', {
        description: response.message,
      });
    } else {
      toast.success('Yeay!', {
        description: 'Login Berhasil',
      });
      setTimeout(() => {
        if (session?.user?.role === 'HRD') {
          router.push('/admin');
        } else {
          router.push(callbackUrl);
        }
      }, 2000);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4  mt-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan email"
                  icons={RiMailFill}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan Password"
                  icons={RiLockPasswordFill}
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="mt-4"
          type="submit"
          variant={'default'}
          size={'block'}
          disabled={form.formState.isSubmitting}
        >
          Masuk
        </Button>
      </form>
    </Form>
  );
};

export default SigninForm;
