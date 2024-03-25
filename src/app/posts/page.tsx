import { ClientOnly } from '@/components/layout/ClientOnly';
import { EmptyResult } from '@/components/layout/EmptyResult'
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar'
import { MangaCard } from '@/components/manga/MangaCard'

import { getCurrentUser } from '@/lib/service/getCurrentUser'


export default async function post() {
  const currentUser = await getCurrentUser();
  const userPostedMangas = currentUser?.mangas;

  return (
    <>
      <ClientOnly>
        <Navbar currentUser={currentUser}/>
        <main className="py-24">

          {!userPostedMangas || userPostedMangas.length === 0 ? (
            <EmptyResult
              title="No your posts found"
              subtitle="You can add a new manga."
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-2">
              {userPostedMangas.map((userPostedManga) => (
                <MangaCard
                  key={userPostedManga.id}
                  manga={userPostedManga}
                  currentUser={currentUser}
                />
              ))}
            </div>
          )}
        </main>
        <Footer />
      </ClientOnly>
    </>
  )
}
