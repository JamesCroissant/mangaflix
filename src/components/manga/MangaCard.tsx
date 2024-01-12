'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

import { FaUser } from "react-icons/fa6";

const MangaCard = () => {
  return (
    <div className="flex justify-center gap-4">
      <Card className='flex flex-row justify-center w-[400px] rounded-xl'>
        <CardHeader className='h-40 w-40'>
          <Image
            width={640}
            height={427}
            src={'/images/default-image.jpeg'}
            alt='Recipe Image'
            className='object-cover h-full w-full group-hover:scale-110 transition rounded-2xl'
          />
        </CardHeader>

        <CardContent className="p-0 flex items-center">
          <div>
            <div className="font-semibold text-lg py-1">
              One Piece
            </div>
            <div className="flex gap-x-3">
              <div className="flex items-center text-gray-500 gap-x-1.5 text-md">
                <FaUser
                  className="text-lg"
                />
                Oda Eiichiro
              </div>
              <div className="py-1 text-gray-500">
                ★ 4.5
              </div>
            </div>
            
            <div className='mt-4 flex gap-x-2'>
              <Badge variant='outline' className='font-medium border-none text-orange-500 bg-rose-200'>
                Boys Comic
              </Badge>
              <Badge variant='outline' className='font-medium border-none text-orange-500 bg-rose-200'>
                Popular
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    
  )
}

export default MangaCard