import prisma from '@/lib/prisma';

export async function getMangas() {
  try {
    const mangas = await prisma.manga.findMany({
      include: {
        reviews: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const safeMangas = mangas.map((manga) => ({
      ...manga,
      reviews: manga.reviews ? manga.reviews.map((review) => ({
        ...review,
        createdAt: review.createdAt.toISOString(),
      })) : [],
      createdAt: manga.createdAt.toISOString(),
      updatedAt: manga.updatedAt?.toISOString() || null,
    }));

    return safeMangas;
  } catch (error) {
    console.error(error);
    return [];
  }
}