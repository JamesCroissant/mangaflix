import Image from 'next/image';

import { Manga } from '@/data/manga';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


type WeeklyProps = {
  mangas: Manga[];
}

export function Weekly({ mangas }: WeeklyProps) {
  return (
    <div className=''>
      <p className="pb-4 text-center text-lg font-medium">
        Trending Manga in the week!
      </p>
      <div className="flex justify-center">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-64 sm:max-w-sm md:max-w-md lg:max-w-lg"
        >
          <CarouselContent className="-ml-1 shadow-lg">
            {mangas.map((manga) => (
              <CarouselItem key={manga.id} className="px-4 basis-1/2 md:basis-1/3">
                <div className="">
                  <Card>
                    <CardContent className="flex items-center justify-center">
                      {manga.category.toLowerCase() === "trending" && 
                        <Image
                          width={600}
                          height={427}
                          src={ manga.imgPath || '/images/default-image.jpeg'}
                          alt='Manga Image'
                          className='w-full h-full'
                        />}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}