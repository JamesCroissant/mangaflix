import { User, Manga, Favorite, Review } from '@prisma/client';
import { SafeUser } from '@/types/user';

export type GetAllMangasParams = {
  query?: string
  genre?: string
  category?: string
  sort?: string
}

export type UrlQueryParams = {
  params: string
  key: string
  value: string | null
}

export type RemoveUrlQueryParams = {
  params: string
  keysToRemove: string[]
}

export type SearchParamProps = {
  params: { id: string }
  searchParams: { 
    [key: string]: string | string[] | number |undefined;
  }
}

export type SafeFavorite = Omit<
  Favorite,
  'createdAt' | 'updatedAt'
> & {
  createdAt: string;
};

export type SafeManga = Omit<Manga, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string | null;
  reviews?: SafeReview[];
};

type MangaDetailsUser = Pick<User, 'id' | 'name' | 'image'>;

export type SafeMangaDetail = Omit<Manga, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  user: MangaDetailsUser;
  reviews?: SafeReview[];
};

export type SafeReview = Omit<Review, 'createdAt'> & {
  createdAt: string;
  user?: SafeUser | User;
};

