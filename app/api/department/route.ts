import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const department = await prisma.department.findMany();
  return NextResponse.json(department);
}
export async function POST(req: Request) {
  const { department_name } = await req.json();
  const newDept = await prisma.department.create({
    data: {
      department_name: department_name,
    },
  });
  return NextResponse.json({
    msg: 'Data Berhasil Disimpan',
    data: newDept,
  });
}
