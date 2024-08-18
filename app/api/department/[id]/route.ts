import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  await prisma.department.delete({
    where: { id: Number(params.id) },
  });
  return NextResponse.json({ message: 'Post deleted' });
}
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { department_name } = await request.json();
  const updatedDepartment = await prisma.department.update({
    where: { id: Number(params.id) },
    data: {
      department_name,
    },
  });
  return NextResponse.json({
    msg: 'Data Berhasil DiUpdate',
    data: updatedDepartment,
  });
}
