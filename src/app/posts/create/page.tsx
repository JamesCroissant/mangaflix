import { ClientOnly } from '@/components/layout/ClientOnly';
import { CreatePostForm } from '@/components/form/CreatePostForm';
import { Navbar } from '@/components/layout/Navbar';

import { getCurrentUser } from '@/lib/service/getCurrentUser'
import { Footer } from '@/components/layout/Footer';


export default async function createPost() {
  const currentUser = await getCurrentUser();

  return (
    <>
      <ClientOnly>
        <Navbar currentUser={currentUser}/>
        <main className="py-24">
          <div className="">
            <CreatePostForm />
          </div>
        </main>
        <Footer />
      </ClientOnly>
    </>

  );
}