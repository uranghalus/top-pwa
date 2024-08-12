import { z, ZodType } from 'zod';
export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: 'Nama Tidak Boleh 1 karakter.',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  password: z.string().min(8, {
    message: 'Password minimal 8 karakter.',
  }),
});
export const LoginSchema = z.object({
  password: z
    .string()
    .min(6, {
      message: 'Password must have at least 6 or more characters',
    })
    .max(100, {
      message: 'Password must be between 6 and 100 characters',
    }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
});
