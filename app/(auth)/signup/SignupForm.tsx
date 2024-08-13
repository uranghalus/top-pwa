'use client';
import React, { useEffect } from 'react';
import { BeatLoader, HashLoader } from 'react-spinners';
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

import { RiLockPasswordFill, RiMailFill, RiUser2Fill } from 'react-icons/ri';
import { RegisterSchema } from '@/lib/schema/auth.schema';
import { RegisterService } from '@/lib/services/auth.service';
import { Button } from '@/components/ui/button';

const SignupForm = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    try {
      const response = await RegisterService(values);
      if (response.error) {
        // Handle non-200 responses
        toast.error('Oops!', {
          description: response.message,
        });
      } else {
        toast.success('Yeay!', {
          description: 'Registrasi Berhasil',
        });
        form.reset();
      }
    } catch (error: any) {
      console.error('Register Action Error:', error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input
                  placeholder="Masukkan Nama"
                  icons={RiUser2Fill}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
          {form.formState.isSubmitting ? (
            <>
              <BeatLoader size={5} color="white" />
              <span>Harap Tunggu</span>
            </>
          ) : (
            'Daftar'
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SignupForm;
