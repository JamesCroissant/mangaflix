'use client';

import Image from 'next/image';
import Link from 'next/link';

import { FavoriteButton } from './FavoriteButton';
import { Stars } from './Stars';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button";

import { FaUser } from "react-icons/fa6";

import { genreLabels, categoryLabels, statusLabels } from '@/constants/manga'

import { SafeUser } from '@/types/user';
import { SafeMangaDetail } from '@/types/manga';
import { calculateAverageRating } from '@/lib/actions/calculateAverageRating';
import { EditDeleteButton } from './EditDeleteButton';
import { Review } from './Review';


type MangaDetailCardProps = {
  manga: SafeMangaDetail;
  currentUser: SafeUser | null;
}

export function MangaDetailCard({ manga, currentUser }: MangaDetailCardProps) {

  const isMyPost = currentUser?.mangas.some(
    (postedManga) => postedManga.id === manga.id
  );

  const averageRating = calculateAverageRating(manga.reviews || []);

  return (
    <div className='flex justify-center'>
      <div className="flex flex-col mx-2 md:w-[500px] lg:w-[600px]">
        <div className="flex flex-col items-center h-[270px] md:h-[300px] overflow-hidden my-4">
          <Image
            width={500}
            height={300}
            src={ manga.image || '/images/default-image.jpeg'}
            alt='Manga Image'
            className='object-cover object-center rounded-2xl w-full h-full'
          />
        </div>
        <div className="flex items-center justify-between ">
          <div className="flex gap-x-2 md:gap-x-4">
            <div className="text-xl md:text-2xl font-semibold">
              {manga.title}
            </div>
            <div className="flex justify-center items-center">
              <Stars rating={averageRating || 0} />
              <span className="ml-2">{averageRating ? averageRating.toFixed(1) : 0}</span>
            </div>
          </div>
          <div className="">
            {isMyPost ? (
              <EditDeleteButton mangaId={manga.id} />
            ) : (
              <FavoriteButton
                mangaId={manga.id}
                currentUser={currentUser}
              />
            )}
          </div>
        </div>

        <div className="mt-2 mb-6 flex gap-x-2 items-center text-slate-500 ">
          <Avatar>
            <AvatarImage/>
            <AvatarFallback>
              <FaUser /> 
            </AvatarFallback>
          </Avatar>
          { manga.author }
        </div>
        <div className="flex flex-row  gap-x-3">
          <Badge variant='outline' className='font-medium border-none text-orange-500 bg-rose-100'>
            { genreLabels[manga.genre] }
          </Badge>
          <Badge variant='outline' className='font-medium border-none text-orange-500 bg-rose-100'>
            { categoryLabels[manga.category] }
          </Badge>
          <Badge variant='outline' className='font-medium border-none text-orange-500 bg-rose-100'>
            { statusLabels[manga.status] }
          </Badge>
          {manga.link ? (
            <Link href={manga.link} target="_blank" rel="noopener noreferrer">
              <Button type="submit" className="rounded-full h-[30px] text-sm bg-orange-500 hover:opacity-85 hover:bg-orange-600">
                View
              </Button>
            </Link>
          ) : null}  
        </div>
        <div className=" my-8">
          {manga.description}
        </div>
        <div className=" my-4">
          <div className="text-xl font-semibold">
            Poster
          </div>
          <div className="mt-2 mb-2 text-md flex gap-x-2 items-center text-slate-500 ">
            <Avatar>
              <AvatarImage src={currentUser?.image || ''} />
              <AvatarFallback>
                <FaUser /> 
              </AvatarFallback>
            </Avatar>
            { manga.user.name }
          </div>
          <div className="w-full overflow-scroll my-5">
            { manga.comment }
          </div>
        </div>

        <Review
          reviews={manga.reviews}
          currentUser={currentUser}
          mangaId={manga.id}
        />
      </div>
    </div>
  
  )
}