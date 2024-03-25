import * as z from 'zod';
import { Genre, Category, Status } from '@prisma/client';

// const imageSchema = z.union([
//   z.instanceof(File),
//   z.string().url().nullable(),
// ]);

export const mangaSchema = z.object({
  title: z.string()
    .min(1, { message: 'Title is required' })
    .max(100, { message: 'Title must be less than 100 characters' }),
  author: z.string()
    .max(50, { message: 'Author name must be less than 50 characters' })
    .optional(),
  description: z.string()
    .max(500, { message: 'Description must be less than 500 characters' })
    .optional(),
  link: z.string()
    .url({ message: 'Link must be a valid URL' })
    .optional(),
  image: z.string().url().optional().nullable(),
  // image: imageSchema.optional(),
  // image: z.instanceof(File).nullable().or(z.string().url()),
  genre: z.union([
    z.literal(Genre['BOYS_COMIC']),
    z.literal(Genre['GIRLS_COMIC']),
  ]),
  category: z.union([
    z.literal(Category['SF']),
    z.literal(Category['ROMANCE']),
    z.literal(Category['FANTASY']),
    z.literal(Category['COMEDY']),
    z.literal(Category['HORROR']),
    z.literal(Category['MYSTERY']),
    z.literal(Category['HISTORY']),
    z.literal(Category['ACTION']),
    z.literal(Category['SPORTS']),
    z.literal(Category['OTHERS']),

  ]),
  status: z.union([
    z.literal(Status['ONGOING']),
    z.literal(Status['COMPLETED']),
  ]),
  comment: z.string()
    .min(1, { message: 'Comment is required' })
    .max(500, { message: 'Comment must be less than 500 characters' }),
});

export type MangaSchema = z.infer<typeof mangaSchema>;