import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'; 

const signInSchema = z.object({
  email: z.string().email('This is not valid email address'),
  password: z
    .string()
    .min(6, { message: 'Password must contain at least 8 characters' }),
});

export type SignInSchema = z.infer<typeof signInSchema>;
export const signInResolver = zodResolver(signInSchema);