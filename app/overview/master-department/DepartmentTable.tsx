'use client';

import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/ui/tables/DataTable';

import { ColumnDef } from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import { RiExpandUpDownLine, RiMore2Fill } from 'react-icons/ri';

export type Department = {
  id: string;
  department_name: string;
};

export const columns: ColumnDef<Department>[] = [
  {
    accessorKey: 'department_name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nama Department
          <RiExpandUpDownLine className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <div className="inline-flex rounded-lg shadow-sm">
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          >
            Default
          </button>
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          >
            Default
          </button>
          <button
            type="button"
            className="py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
          >
            Default
          </button>
        </div>
      );
    },
  },
];
const handleEdit = (id: number) => {
  // Implement the edit functionality, e.g., navigate to an edit page
};

const handleDelete = async (id: number) => {
  await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });
  // Optionally, refresh the data
};

const DepartmentTable = () => {
  const [Departments, setDepartments] = useState<Department[]>([]);
  useEffect(() => {
    fetch('/api/department')
      .then((response) => response.json())
      .then((data) => setDepartments(data));
  }, []);
  return <DataTable columns={columns} data={Departments} />;
};

export default DepartmentTable;
