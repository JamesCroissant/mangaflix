import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const signUpSchema = z
  .object({
    name: z
      .string({
        invalid_type_error: 'Please enter a name.',
      })
      .min(1, { message: 'Please enter a name.' })
      .max(30, { message: 'Name must be less than 30 characters' }),
    email: z
      .string({
        invalid_type_error: 'Please enter an email address.',
      })
      .email({ message: 'Please enter a valid email address.' }),
    password: z
      .string({
        invalid_type_error: 'Please enter a password.',
      })
      .min(6, { message: 'Password must contain at least 8 characters' }),
  });


  export type SignUpSchema = z.infer<typeof signUpSchema>;
  export const signUpResolver = zodResolver(signUpSchema);