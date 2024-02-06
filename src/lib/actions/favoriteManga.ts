'use server';

import { SafeUser } from "@/types";
import prisma from '@/lib/prisma';

type FavoriteMangaParams = {
  currentUser?: SafeUser | null
  mangaId: number;
}

export const toggleFavoriteManga = async ({ currentUser, mangaId }: FavoriteMangaParams) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: currentUser?.id,
      },
    });
    if (!user) {
      throw new Error('User not found');
    }

    const isAlreadyFavorite = user.favoriteIds.includes(mangaId);

    let updatedFavoriteIds;
    if (!isAlreadyFavorite) {
      updatedFavoriteIds = [...user.favoriteIds, mangaId];
    } else {
      updatedFavoriteIds = user.favoriteIds.filter((id: number) => id !== mangaId);
    }

    await prisma.user.update({
      where: {
        id: currentUser?.id,
      },
      data: {
        favoriteIds: updatedFavoriteIds,
      },
    });
    console.log(`Manga ${isAlreadyFavorite ? 'removed from' : 'added to'} favorites successfully`);
  } catch (error) {
    console.error('Failed to toggle manga in favorites:', error);
    throw new Error("Error")
  }
}