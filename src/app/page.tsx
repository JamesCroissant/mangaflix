import { getCurrentUser } from '@/lib/service/getCurrentUser'
import { Main } from '@/components/layout/Main'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ClientOnly } from '@/components/layout/ClientOnly'


export default async function Home() {
  const currentUser = await getCurrentUser()

  return (
    <>
      <ClientOnly>
        <Navbar currentUser={currentUser}/>
        <main className="py-24">
          <Main currentUser={currentUser} />
        </main>
        <Footer />
      </ClientOnly>
    </>
  )
}
