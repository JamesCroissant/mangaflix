import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import prisma from '@/lib/prisma'

export const getCurrentUser = async () => {
  try {
    const session = await getServerSession(authOptions)

    if (!session || !session.user?.email) {
      return null
    }

    // get login user
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      include: {
        mangas: true,
        favorites: true,
        reviews: true
      },
    })

    if (!currentUser) {
      return null
    }

    const safeManga = currentUser.mangas.map((manga) => ({
      ...manga,
      createdAt: manga.createdAt?.toISOString(),
      updatedAt: manga.updatedAt?.toISOString() || null,
    }));

    const safeFavorite = currentUser.favorites.map((favorite) => ({
      ...favorite,
      createdAt: favorite.createdAt?.toISOString(),
    }));

    const safeReview = currentUser.reviews.map((review) => ({
      ...review,
      createdAt: review.createdAt?.toISOString(),
    }));

    const { hashedPassword, ...rest } = currentUser;
    return {
      ...rest,
      mangas: safeManga,
      favorites: safeFavorite,
      reviews: safeReview,
      createdAt: currentUser.createdAt?.toISOString(),
      updatedAt: currentUser.updatedAt?.toISOString() || null,
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
    
  } catch (error) {
    return null
  }
}