
import { FaUser } from 'react-icons/fa';
import { format } from 'date-fns';
import { SafeReview } from "@/types/manga";

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Stars } from './Stars';

type ReviewListProps = {
  reviews: SafeReview[];
}

export const ReviewList = ({ reviews }: ReviewListProps) => {
  const sortedReviews = reviews.sort((a, b) => Number(new Date(b.createdAt)) - Number(new Date(a.createdAt)));

  return (
    <div className='bg-rose-50 px-4 my-4'>
      {sortedReviews.map((review, index) => {
        const date = new Date(review.createdAt);
        const formattedDate = format(date, 'MMMM dd, yyyy HH:mm:ss');
        return (
          <div
            className={`flex flex-col gap-4  ${index > 0 && 'border-t'} border-t-stone-200 border-solid py-4`}
            key={review.id}
          >
            <div className='flex gap-4 items-center justify-between'>
              <div className='flex gap-2 items-center'>
                <Avatar>
                  <AvatarImage src={review.user?.image || ''} />
                  <AvatarFallback>
                    <FaUser />
                  </AvatarFallback>
                </Avatar>
                <div>{review.user?.name}</div>
              </div>
              <span className='text-sm'>{formattedDate}</span>
            </div>
            <div className='flex gap-2 items-center'>
              <Stars rating={review.rating} />
              <div>
                {review.rating ? review.rating.toFixed(1) : 0}
              </div>
            </div>
            <div className='flex gap-4'>
              <p>{review.comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  )
}