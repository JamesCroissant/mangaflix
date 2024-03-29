import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { MangaCard } from '@/components/manga/MangaCard'
import ItemFilter from '@/components/filter/ItemFilter'

import { SearchParamProps } from '@/types/manga';
import { getFilteredMangas } from '@/lib/actions/filterManga';

import { getCurrentUser } from '@/lib/service/getCurrentUser'
import { ClientOnly } from '@/components/layout/ClientOnly';



export default async function Search({ searchParams }: SearchParamProps) {
  const keywordText = (searchParams?.query as string) || '';
  const genre = (searchParams?.genre as string) || '';
  const category = (searchParams?.category as string) || '';
  const sort = (searchParams?.sort as string) || '';


  const mangas = await getFilteredMangas({
    query: keywordText,
    genre,
    category,
    sort,
  })

  const currentUser = await getCurrentUser()
  
  return (
    <>
      <ClientOnly>
        <Navbar currentUser={currentUser}/>
        <main className="py-24">
          <ItemFilter />
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
        <Footer />
      </ClientOnly>
    </>
  )
}
