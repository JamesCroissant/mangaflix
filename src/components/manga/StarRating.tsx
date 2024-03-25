'use client';

import { Rating as SimpleRating } from 'react-simple-star-rating';

type StarRatingProps = {
  onClick: (rate: number) => void;
};
export function StarRating({ onClick }: StarRatingProps) {
  return (
    <SimpleRating
      onClick={onClick}
      SVGstyle={{ display: 'inline' }}
      size={24}
    />
  );
}
