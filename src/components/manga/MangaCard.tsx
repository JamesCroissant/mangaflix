'use client';

import Image from 'next/image';

import { FavoriteButton } from './FavoriteButton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaUser } from "react-icons/fa6";

import { SafeUser } from '@/types';
import { Manga } from '@/data/manga';


type MangaCardProps = {
  manga: Manga;
  currentUser: SafeUser | null;
}

export function MangaCard({ manga, currentUser }: MangaCardProps) {
  return (
    <div className="flex justify-center gap-4">
      <Card className='relative flex row justify-center w-[400px] md:w-[420px] rounded-xl transition duration-300 hover:-translate-y-1 hover:scale-105'>
        <div className="flex flex-row justify-center w-11/12">
          <CardHeader className='h-40 w-40'>
            <Image
              width={640}
              height={427}
              src={ manga.imgPath || '/images/default-image.jpeg'}
              alt='Manga Image'
              className='object-cover h-full w-full group-hover:scale-110 transition rounded-2xl'
            />
          </CardHeader>

          <CardContent className="p-0 flex items-center">
            <div className="">
              <div className={`font-semibold py-1 ${manga.title.length >= 15 ? "text-md inline-block w-full" : "text-lg"}`}>
                { manga.title }
              </div>
              <div>
                { currentUser ? 
                  <FavoriteButton
                    mangaId={manga.id}
                    currentUser={currentUser}
                  />
                  : null
                }
              </div>
              <div className="flex gap-x-3">
                <div className={`flex items-center text-gray-500 gap-x-1.5 ${manga.title.length >= 15 ? "text-sm" : "text-xs"}`}>
                  <FaUser
                    className="text-md"
                  />
                  { manga.author }
                </div>
                <div className="py-1 text-gray-500 text-sm">
                  ★ { manga.rating }
                </div>
              </div>
              
              <div className='mt-4 flex gap-x-2'>
                <Badge variant='outline' className='font-medium border-none text-orange-500 bg-rose-100'>
                { manga.category }
                </Badge>
                <Badge variant='outline' className='font-medium border-none text-orange-500 bg-rose-100'>
                  { manga.genre }
                </Badge>
              </div>
            </div>
          </CardContent>
        </div>
        
      </Card>
    </div>
    
  )
}