import Navbar from '@/components/layout/Navbar'
import { Weekly } from '@/components/manga/Weekly'
import CategoryButton from '@/components/manga/CategoryButton'
import { MangaCard } from '@/components/manga/MangaCard'

import { GetAllMangasParams, SearchParamProps } from '@/types';
import { getAllMangas } from '@/lib/actions/filterManga';

import { mangas } from '@/data/manga'
import { getCurrentUser } from '@/lib/service/getCurrentUser'


export default async function Home({ searchParams }: SearchParamProps) {
  const keywordText = (searchParams?.query as string) || '';
  const genre = (searchParams?.genre as string) || '';
  const category = (searchParams?.category as string) || '';
  const sort = (searchParams?.sort as string) || '';

  const trendingMangas = mangas.filter(manga => manga.category === "Trending");

  const filterdMangas = await getAllMangas({
    query: keywordText,
    genre,
    category,
    sort,
  })

  const currentUser = await getCurrentUser()

  return (
    <>
      <Navbar currentUser={currentUser}/>
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
              currentUser={currentUser}
            />
          ))}
        </div>
      </main>
    </>
  )
}
