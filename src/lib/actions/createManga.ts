'use server';

import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/service/getCurrentUser';
import { MangaSchema } from '@/schema/manga';


export const createManga = async (formData: MangaSchema) => {
  console.log(formData)

  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error('User not found');
    }

    const manga = await prisma.manga.create({
      data: {
        ...formData,
        userId: currentUser.id,
      },
    });

    return manga;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create manga');
  }
};
