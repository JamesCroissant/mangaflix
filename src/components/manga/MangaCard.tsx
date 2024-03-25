'use client'

import Image from 'next/image'
import Link from 'next/link'

import { FavoriteButton } from './FavoriteButton'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FaUser } from "react-icons/fa6"

import { genreLabels, categoryLabels, statusLabels } from '@/constants/manga'

import { SafeUser } from '@/types/user'
import { SafeManga } from '@/types/manga'
import { calculateAverageRating } from '@/lib/actions/calculateAverageRating'


type MangaCardProps = {
  manga: SafeManga;
  currentUser: SafeUser | null;
}

export function MangaCard({ manga, currentUser }: MangaCardProps) {
  const isMyPost = currentUser?.mangas.some(
    (postedManga) => postedManga.id === manga.id
  );


  const averageRating = calculateAverageRating(manga.reviews || []);

  return (
    <div className="flex justify-center gap-4">
      <Link href={`/mangas/${manga.id}`}>
        <Card className='relative flex row justify-center w-[400px] md:w-[420px] rounded-xl transition duration-300 hover:-translate-y-1 hover:scale-105'>
          <div className="flex flex-row justify-center w-11/12">
            <CardHeader className='h-40 w-40'>
              <Image
                width={640}
                height={427}
                src={ manga.image || '/images/default-image.jpeg'}
                alt='Manga Image'
                className='object-cover h-full w-full group-hover:scale-110 transition rounded-2xl'
              />
            </CardHeader>

            <CardContent className="p-0 flex items-center">
              <div className="">
                <div className={`font-semibold py-1 ${manga.title.length >= 15 ? "text-md inline-block w-full" : "text-lg"}`}>
                  { manga.title }
                </div>
                <div className="absolute top-3 right-3.5">
                {!isMyPost && (
                  <FavoriteButton
                    mangaId={manga.id}
                    currentUser={currentUser}
                  />
                )}
                </div>
                <div className="flex gap-x-3">
                  <div className={`flex items-center text-gray-500 gap-x-1.5 ${manga.title.length >= 15 ? "text-sm" : "text-xs"}`}>
                    <FaUser
                      className="text-md"
                    />
                    { manga.author }
                  </div>
                  <div className="py-1 text-gray-500 text-sm">
                    ★ { averageRating ? averageRating.toFixed(1) : 0 }
                  </div>
                </div>
                
                <div className='mt-4 flex gap-x-2'>
                  <Badge variant='outline' className='font-medium border-none text-orange-500 bg-rose-100'>
                    { categoryLabels[manga.category] }
                  </Badge>
                  <Badge variant='outline' className='font-medium border-none text-orange-500 bg-rose-100'>
                    { genreLabels[manga.genre] }
                  </Badge>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </Link>
    </div>
  )
}