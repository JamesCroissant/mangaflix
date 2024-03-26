import { SafeReview } from "@/types/manga";


export function calculateAverageRating(reviews: SafeReview[]): number | null {
  if (reviews.length === 0) {
    return null;
  }

  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = totalRating / reviews.length;

  return averageRating;
}
