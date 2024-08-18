'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import {
  RiAddCircleLine,
  RiLockPasswordFill,
  RiMailFill,
  RiUser2Fill,
} from 'react-icons/ri';
import { BeatLoader } from 'react-spinners';
import { toast } from 'sonner';
import { mutate } from 'swr';
import { z } from 'zod';
const DepartSchema = z.object({
  department_name: z.string().min(1, {
    message: 'Password must have at least 1 or more characters',
  }),
});

const ModallAddDepartment = () => {
  const form = useForm<z.infer<typeof DepartSchema>>({
    resolver: zodResolver(DepartSchema),
    defaultValues: {
      department_name: '',
    },
  });
  const onSubmit = async (values: z.infer<typeof DepartSchema>) => {
    try {
      const response = await fetch('/api/department', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(data);

      // const response = await RegisterService(values);
      if (!response) {
        // Handle non-200 responses
        toast.error('Oops!', {
          description: data.msg,
        });
      } else {
        toast.success('Yeay!', {
          description: 'Registrasi Berhasil',
        });
        mutate('/api/department');

        form.reset();
      }
    } catch (error: any) {
      console.error('Register Action Error:', error);
    }
  };
  return (
    <div className="relative">
      <Dialog>
        <DialogTrigger asChild>
          <Button size="default" className="gap-1">
            <RiAddCircleLine className="h-3.5 w-3.5" />
            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
              Add Product
            </span>
          </Button>
        </DialogTrigger>
        <DialogOverlay className="relative">
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Tambah Department</DialogTitle>
              <DialogDescription>
                Buat Department. Klik Tombol Simpan untuk menyimpan data.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="department_name"
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
          </DialogContent>
        </DialogOverlay>
      </Dialog>
    </div>
  );
};

export default ModallAddDepartment;
