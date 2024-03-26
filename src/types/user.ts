import { User } from '@prisma/client';
import { SafeManga, SafeFavorite, SafeReview } from '@/types/manga';

export type SafeUser = Omit<
  User,
  'hashedPassword' | 'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string;
  updatedAt: string | null;
  emailVerified: string | null;
  mangas: SafeManga[];
  favorites: SafeFavorite[];
  reviews: SafeReview[];
};