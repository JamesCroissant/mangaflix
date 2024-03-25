import { Footer } from '@/components/layout/Footer'
import { Main } from '@/components/layout/Main'
import Navbar from '@/components/layout/Navbar'

import { getCurrentUser } from '@/lib/service/getCurrentUser'


export default async function Home() {

  const currentUser = await getCurrentUser()

  return (
    <>
      <Navbar currentUser={currentUser}/>
      <main className="py-24">
        <Main currentUser={currentUser} />
      </main>
      <Footer />
    </>
  )
}
