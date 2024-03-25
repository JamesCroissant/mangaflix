'use server';

import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/service/getCurrentUser';
import { MangaSchema } from '@/schema/manga';


export const editManga = async (formData: MangaSchema, id: string) => {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error('User not found');
    }

    if (!id) throw new Error('Manga id not found');

    const manga = await prisma.manga.update({
      where: {
        id,
        userId: currentUser.id,
      },
      data: {
        ...formData,
      },
    });

    return manga;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to edit manga');
  }
}