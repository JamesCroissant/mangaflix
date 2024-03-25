import Navbar from '@/components/layout/Navbar'
import { MangaDetailCard } from '@/components/manga/MangaDetailCard'

import { GetAllMangasParams, SearchParamProps } from '@/types/manga';
import { getAllMangas } from '@/lib/actions/filterManga';

import { getCurrentUser } from '@/lib/service/getCurrentUser'
import { getManga } from '@/lib/service/getManga';

export default async function MangaDetail({ 
  params,
}: {
  params: {id: string}
}) {
  const manga = await getManga(params.id);
  const currentUser = await getCurrentUser();
  return (
    <>
      <Navbar currentUser={currentUser}/>
      <main className="py-24">
        <MangaDetailCard
          key={manga.id}
          manga={manga}
          currentUser={currentUser}
        />
      </main>
    </>
  )
}