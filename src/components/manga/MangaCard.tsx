'use client';

import Image from 'next/image';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FaUser } from "react-icons/fa6";

import { Manga } from '@/data/manga';


type MangaCardProps = {
  manga: Manga;
}

export function MangaCard({ manga }: MangaCardProps) {

  return (
    <div className="flex justify-center gap-4">
      <Card className='flex flex-row justify-center w-[400px] rounded-xl transition duration-300 hover:-translate-y-1 hover:scale-105'>
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
          <div>
            <div className="font-semibold text-lg py-1">
              { manga.title }
            </div>
            <div className="flex gap-x-3">
              <div className="flex items-center text-gray-500 gap-x-1.5 text-sm">
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
      </Card>
    </div>
    
  )
}