import Navbar from '@/components/layout/Navbar'
import Weekly from '@/components/manga/Weekly'
import CategoryButton from '@/components/manga/CategoryButton'
import { MangaCard } from '@/components/manga/MangaCard'

import { mangas }  from '@/data/manga'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="py-24">
        <Weekly />
        <CategoryButton />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-2">
          {mangas.map((manga) => (
            <MangaCard
              key={manga.id}
              manga={manga}
            />
          ))}
        </div>
      </main>
    </>
  )
}
