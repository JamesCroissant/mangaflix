'use server';

import { mangas } from '@/data/manga';
import { getCurrentUser } from '@/lib/service/getCurrentUser';

export async function getUserFavorites() {
  try {
    const currentUser = await getCurrentUser();
    const userFavoriteIds = currentUser.favoriteIds;

    if (!currentUser) {
      throw new Error('User not found');
    }

    const userFavorites = mangas.filter(manga => userFavoriteIds.includes(manga.id));
    return userFavorites

  } catch (error) {
    console.error(error);
    throw new Error();
  }
}