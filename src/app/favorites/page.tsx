import { redirect } from 'next/navigation';
import { EmptyResult } from '@/components/layout/EmptyResult';
import Navbar from '@/components/layout/Navbar'
import { MangaCard } from '@/components/manga/MangaCard'

import { getCurrentUser } from '@/lib/service/getCurrentUser'
import { getUserFavorites } from '@/lib/service/getUserFavorites';


export default async function Favorites() {
  const favoriteMangas = await getUserFavorites();
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    redirect('/login');
  }

  if (favoriteMangas.length === 0) {
    return (
      <>
        <Navbar currentUser={currentUser}/>
        <main className="py-24">
          <EmptyResult
            title="No favorites found"
            subtitle="You haven't added anything to your favorites. Discover great mangas to add to your list!"
          />
        </main>
      </>
    );
  }

  return (
    <>
      <Navbar currentUser={currentUser}/>
      <main className="py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-2">
          {favoriteMangas.map((favoriteManga) => (
            <MangaCard
              key={favoriteManga.id}
              manga={favoriteManga}
              currentUser={currentUser}
            />
          ))}
        </div>
      </main>
    </>
  )
}
