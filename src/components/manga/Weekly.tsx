import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Weekly = () => {
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
            {Array.from({ length: 7 }).map((_, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/2 md:basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-3xl font-semibold">{index + 1}</span>
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

export default Weekly