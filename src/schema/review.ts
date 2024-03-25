import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

export const reviewSchema = z.object({
  rating: z.coerce.number().min(0).max(5),
  comment: z
    .string()
    .max(200, { message: 'Comment must be less than 200 characters' })
});

export type ReviewSchema = z.infer<typeof reviewSchema>;
export const reviewResolver = zodResolver(reviewSchema);