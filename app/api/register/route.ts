import { prisma } from '@/lib/prisma';
import { hashPassword } from '@/lib/utils/password-utils';
// import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';
import { createHash } from 'node:crypto';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password || !name) {
      return Response.json(
        { error: 'Form Tidak Boleh Kosong' },
        { status: 400 }
      );
    }

    const userExist = await prisma.user.findUnique({
      where: { email },
    });

    if (userExist) {
      return Response.json({ error: 'Email Telah Terdaftar' }, { status: 409 });
    }

    const { hash, salt } = await hashPassword(password);
    const emailHash = createHash('md5').update(email).digest('hex');
    const profileImage = `https://www.gravatar.com/avatar/${emailHash}?d=identicon`;

    const insertUser = await prisma.user.create({
      data: {
        name,
        email,
        hash,
        salt,
        role: 'ADMIN',
        profileImage,
      },
    });

    return Response.json({ success: insertUser }, { status: 201 });
  } catch (err) {
    console.error('Register Error:', err);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}
