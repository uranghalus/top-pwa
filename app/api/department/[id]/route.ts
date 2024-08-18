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
