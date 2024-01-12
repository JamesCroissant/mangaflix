import Navbar from '@/components/layout/Navbar'
import Weekly from '@/components/manga/Weekly'
import CategoryButton from '@/components/manga/CategoryButton'
import MangaCard from '@/components/manga/MangaCard'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="py-24">
        <Weekly />
        <CategoryButton />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />

        </div>
      </main>
    </>
  )
}
