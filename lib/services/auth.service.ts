'use server';

import { AuthError } from 'next-auth';
import { signIn } from '../auth';

interface RegisterProps {
  name: string;
  password: string;
  email: string;
}
interface LoginProps {
  email: any;
  password: any;
}
export async function RegisterService(userdata: RegisterProps) {
  try {
    const response = await fetch(process.env.BASE_URL! + '/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userdata),
    });
    const data = await response.json();

    if (!response.ok) {
      return {
        error: 'Registrasi Gagal',
        message: data.error,
      };
    }
    return data;
  } catch (error: any) {
    console.error('Registration Service Error:', error);

    return {
      error: 'Registrasi Gagal',
      message: error.message,
    };
  }
}
export async function loginServices(userData: LoginProps) {
  try {
    await signIn('credentials', {
      ...userData,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CallbackRouteError':
          return {
            error: 'Login Gagal',
            message: error.cause?.err?.message,
          };
        default:
          return {
            error: 'Login Gagal',
            message: 'unknown error',
          };
      }
    }
    console.error('Login Service Error:', error);
    throw error;
  }
}
