'use server';

import prisma from '@/lib/prisma';
import { getCurrentUser } from '@/lib/service/getCurrentUser';
import { ReviewSchema } from '@/schema/review';


export const createReview = async (formData: ReviewSchema, mangaId: string) => {
  
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      throw new Error('User not found');
    }

    const review = await prisma.review.create({
      data: {
        ...formData,
        user: {
          connect: { id: currentUser.id},
        },
        manga: {
          connect: { id: mangaId},
        }
      },
    });
    return review;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to add review');
  }
};