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
          <CarouselContent className="-ml-1">
            {mangas.map((manga) => (
              <CarouselItem key={manga.id} className="pl-2 basis-1/2 md:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {manga.category.toLowerCase() === "trending" &&  manga.imgPath}
                      </span>
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