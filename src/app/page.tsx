import Navbar from '@/components/layout/Navbar'
import { Weekly } from '@/components/manga/Weekly'
import CategoryButton from '@/components/manga/CategoryButton'
import { MangaCard } from '@/components/manga/MangaCard'

import { GetAllMangasParams, SearchParamProps } from '@/types';
import { getAllMangas } from '@/lib/actions/manga.action';

import { mangas } from '@/data/manga'


export default async function Home({ searchParams }: SearchParamProps) {
  const keywordText = (searchParams?.query as string) || '';
  const genre = (searchParams?.genre as string) || '';
  const category = (searchParams?.category as string) || '';
  const sort = (searchParams?.sort as string) || '';

  const trendingMangas = mangas.filter(manga => manga.category === "trending");

  const filterdMangas = await getAllMangas({
    query: keywordText,
    genre,
    category,
    sort,
  })

  return (
    <>
      <Navbar />
      <main className="py-24">
        <Weekly 
          mangas={trendingMangas}
        />
        <CategoryButton />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-2">
          {filterdMangas.map((filterdManga) => (
            <MangaCard
              key={filterdManga.id}
              manga={filterdManga}
            />
          ))}
        </div>
      </main>
    </>
  )
}
