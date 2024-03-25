import { MdOutlineStarHalf } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";
import { MdOutlineStarPurple500 } from "react-icons/md";

type StarsProps = {
  rating: number;
};
export function Stars({ rating }: StarsProps) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<MdOutlineStarPurple500 key={`${i}-full`} className="text-lg md:text-xl text-yellow-500"/>);
  }
  for (let i = 0; i < halfStars; i++) {
    stars.push(<MdOutlineStarHalf key={`${i}-half`} className="text-lg md:text-xl text-yellow-500" />);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<MdOutlineStarOutline key={`${i}-empty`} className="text-lg md:text-xl text-yellow-500 " />);
  }

  return <div className='flex items-center text-primary'>{stars}</div>;
}