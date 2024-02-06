import Navbar from '@/components/layout/Navbar'
import { MangaCard } from '@/components/manga/MangaCard'
import ItemFilter from '@/components/filter/ItemFilter'

import { GetAllMangasParams, SearchParamProps } from '@/types';
import { getAllMangas } from '@/lib/actions/filterManga';

import { getCurrentUser } from '@/lib/service/getCurrentUser'


export default async function Search({ searchParams }: SearchParamProps) {
  const keywordText = (searchParams?.query as string) || '';
  const genre = (searchParams?.genre as string) || '';
  const category = (searchParams?.category as string) || '';
  const sort = (searchParams?.sort as string) || '';


  const mangas = await getAllMangas({
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
        <div>
          <ItemFilter />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-2">
          {mangas.map((manga) => (
            <MangaCard
              key={manga.id}
              manga={manga}
              currentUser={currentUser}
            />
          ))}
        </div>
      </main>
    </>
  )
}
