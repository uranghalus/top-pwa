'use client';
import React, { useEffect } from 'react';
import { Department } from './DepartmentTable';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { DepartSchema } from './ModallAddDepartment';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { mutate } from 'swr';
import { BeatLoader } from 'react-spinners';
import { Button } from '@/components/ui/button';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from '@/components/ui/form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RiEdit2Line, RiEditBoxLine } from 'react-icons/ri';
import { Input } from '@/components/ui/input';
interface HandleEditProps {
  department: Department;
  onSave: () => void;
}

const ModalEditDepartment: React.FC<HandleEditProps> = ({
  department,
  onSave,
}) => {
  const form = useForm<z.infer<typeof DepartSchema>>({
    resolver: zodResolver(DepartSchema),
    defaultValues: {
      department_name: '',
    },
  });
  useEffect(() => {
    form.reset(department);
  }, [form, department]);
  const onSubmit = async (values: z.infer<typeof DepartSchema>) => {
    try {
      const response = await fetch(`/api/department/${department.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      // const response = await RegisterService(values);
      if (!response.ok) {
        toast.error('Oops!', {
          description: data.msg || 'Ada Sesuatu Yang Salah.',
        });
      } else {
        toast.success('Success!', {
          description: 'Data Berhasil Di Update',
        });
        mutate('/api/department');
        onSave(); // Notify parent component to revalidate data
      }
    } catch (error: any) {
      console.error('Edit Department Error:', error);
    }
  };
  return (
    <div className="relative">
      <Dialog>
        <DialogTrigger asChild>
          <button
            type="button"
            className="py-2 px-3 h-full inline-flex items-center gap-x-2 -ms-px first:ms-0 text-sm font-medium focus:z-10 border border-transparent bg-yellow-500 text-white hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          >
            <RiEditBoxLine className="size-5" />
          </button>
        </DialogTrigger>
        <DialogOverlay className="relative">
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Post</DialogTitle>
              <DialogDescription>
                Update the post. Click save to confirm changes.
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
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="Masukkan Data" {...field} />
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
                      <span>Please Wait</span>
                    </>
                  ) : (
                    'Save'
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

export default ModalEditDepartment;
