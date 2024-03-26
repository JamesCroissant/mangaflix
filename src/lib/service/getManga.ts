import prisma from '@/lib/prisma';
import { Review } from '@prisma/client';

export async function getManga(id: string) {
  try {
    const manga = await prisma.manga.findUnique({
      where: {
        id,
      },
      include: {
        reviews: {
          include: {
            user: true,
          },
        },
        user: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    if (!manga) return null;

    const safeManga = {
      ...manga,
      reviews: (manga.reviews as Review[]).map((review) => ({
        ...review,
        createdAt: review.createdAt?.toISOString(),
      })),
      createdAt: manga.createdAt?.toISOString(),
      updatedAt: manga.updatedAt?.toISOString() || null,
    };

    return safeManga;
  } catch (error) {
    throw new Error('Failed to get a manga');
  }
}