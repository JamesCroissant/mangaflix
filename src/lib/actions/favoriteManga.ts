'use server';

import { SafeUser } from "@/types/user";
import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/service/getCurrentUser';

type FavoriteMangaParams = {
  currentUser?: SafeUser | null
  mangaId: string;
}


export const addFavoriteManga = async ({ currentUser, mangaId }: FavoriteMangaParams) => {
  try {
    if (!currentUser) {
      throw new Error('Not authenticated');
    }

    await prisma.favorite.create({
      data: {
        userId: currentUser.id,
        mangaId,
      },
    });
  } catch (error) {
    throw new Error('Failed to add manga to favorites');
  }
};

export const deleteFavoriteManga = async (favoriteId: string) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error('Not authenticated');
    }

    await prisma.favorite.delete({
      where: {
        id: favoriteId,
      },
    });
  } catch (error) {
    throw new Error('Failed to delete manga from favorites');
  }
};