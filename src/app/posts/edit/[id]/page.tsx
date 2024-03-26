import { ClientOnly } from '@/components/layout/ClientOnly';
import { EditPostForm } from '@/components/form/EditPostForm';
import { Navbar } from '@/components/layout/Navbar';

import { getCurrentUser } from '@/lib/service/getCurrentUser'
import { getManga } from '@/lib/service/getManga';
import { EmptyResult } from '@/components/layout/EmptyResult';
import { Footer } from '@/components/layout/Footer';


export default async function editPost({ params }: { params: { id: string } }) {
  const currentUser = await getCurrentUser();
  const manga = await getManga(params.id);

  if (!manga) return (
    <ClientOnly>
      <EmptyResult />
    </ClientOnly>
  );

  return (
    <>
      <ClientOnly>
        <Navbar currentUser={currentUser}/>
        <main className="py-24">
          <div className="">
            <ClientOnly>
              <EditPostForm manga={manga} />
            </ClientOnly>
          </div>
        </main>
        <Footer />
      </ClientOnly>
    </>

  )
}