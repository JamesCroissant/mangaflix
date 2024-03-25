'use server';

import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/service/getCurrentUser';

type DeleteMangaParams = {
  mangaId: string;
};

export const deleteManga = async ({ mangaId }: DeleteMangaParams) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error('Not authenticated');
    }

    await prisma.manga.delete({
      where: {
        id: mangaId,
        userId: currentUser.id,
      },
    });
  } catch (error) {
    throw new Error('Failed to delete manga');
  }
};