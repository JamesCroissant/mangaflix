import { ClientOnly } from '@/components/layout/ClientOnly';
import { CreatePostForm } from '@/components/form/CreatePostForm';
import Navbar from '@/components/layout/Navbar';

import { getCurrentUser } from '@/lib/service/getCurrentUser'


export default async function createPost() {
  const currentUser = await getCurrentUser();

  return (
    <>
      <Navbar currentUser={currentUser}/>
      <main className="py-24">
        <div className="">
          <ClientOnly>
            <CreatePostForm />
          </ClientOnly>
        </div>
      </main>
    </>

  );
}