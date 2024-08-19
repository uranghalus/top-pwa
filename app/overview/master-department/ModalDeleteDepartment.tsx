import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import React from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { toast } from 'sonner';
import { mutate } from 'swr';

interface DeleteProps {
  depart_id: number;
  onDelete: () => void;
}
const ModalDeleteDepartment: React.FC<DeleteProps> = ({
  depart_id,
  onDelete,
}) => {
  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/department/${depart_id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        toast.error('Failed to Delete', {
          description: data.msg || 'Something went wrong.',
        });
      } else {
        toast.success('Post Deleted', {
          description: 'The post has been successfully deleted.',
        });
        await mutate('/api/department'); // Revalidate the data
        onDelete(); // Notify parent component to refresh the data
      }
    } catch (error: any) {
      console.error('Delete Post Error:', error);
      toast.error('Delete Failed', {
        description: 'An error occurred while deleting the post.',
      });
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          //   onClick={() => handleDelete(row.original.id)}
          className="py-2 px-3 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border-transparent bg-red-500 text-white hover:bg-red-600  focus:bg-red-600 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
        >
          <RiDeleteBin5Line className="size-5" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ModalDeleteDepartment;
