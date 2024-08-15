import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import React from 'react';
import { RiAddCircleLine } from 'react-icons/ri';

const ModallAddDepartment = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="default" className="gap-1">
          <RiAddCircleLine className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Product
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Tambah Department</DialogTitle>
          <DialogDescription>
            Buat Department. Klik Tombol Simpan untuk menyimpan data.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ModallAddDepartment;
