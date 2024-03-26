'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from 'react-hot-toast'

import { SafeReview } from "@/types/manga";
import { SafeUser } from "@/types/user";
import { ReviewForm } from "../form/ReviewForm";
import { ReviewList } from "./ReviewList";
import { ReviewSchema, reviewResolver } from "@/schema/review";
import { createReview } from '@/lib/actions/createReview';
import { useForm } from "react-hook-form";


type ReviewProps = {
  reviews?: SafeReview[];
  currentUser: SafeUser | null;
  mangaId: string;
};

export const Review = ({ reviews, currentUser, mangaId }: ReviewProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ReviewSchema>({
    defaultValues: { rating : 0, comment : '' },
    resolver: reviewResolver,
  })

  const { reset } = form 

  const createReviewHandler = async (formData: ReviewSchema) => {
    setIsLoading(true)
    try {
      await createReview(formData, mangaId);
      router.refresh()
      toast.success('Successfully added your comment')
      reset()
    } catch (error) {
      toast.error("An error has occurred." + error)
    } finally {
      setIsLoading(false)
    }
  }

  const isUserPostedManga = currentUser?.mangas.some(
    (postedManga) => postedManga.id === mangaId
  );

  return (
    <div className="w-5/12 my-4">
      <div className="text-xl font-semibold">
        Review ( {reviews?.length} )
      </div>
      {currentUser && !isUserPostedManga && (
        <ReviewForm
          form={form}
          onSubmit={createReviewHandler}
        />
      )}
      {reviews && (
        <ReviewList
          reviews={reviews}
        />
      )}
    </div>
  )
}