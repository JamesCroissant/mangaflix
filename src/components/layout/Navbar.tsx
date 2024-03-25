"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from 'next/navigation'

import { FiSearch } from "react-icons/fi"
import { HiOutlinePencilAlt } from "react-icons/hi"
import { UserMenu } from '@/components/layout/UserMenu'

import { SafeUser } from "@/types/user"
import useSignInModal from "@/hooks/useSignInModal"


type NavbarProps = {
  currentUser?: SafeUser | null;
};

const Navbar = ({ currentUser }: NavbarProps) => {
  const router = useRouter();
  const currentPath = usePathname();
  const loginModal = useSignInModal();

  const handleClick = () => {
    if (currentUser) {
      router.push('/posts/create');
    } else {
      loginModal.onOpen();
    }
  };

  return (
    <>
      <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-3 border-b-[1px] flex justify-evenly">
          <Link href="/" className='flex items-center'>
            <h1 className="text-2xl font-semibold text-left text-orange-500">
              Manga Flix
            </h1>
          </Link>
          <nav className="flex gap-4 items-center">
            <Link
              key='/search'
              className={`${currentPath === "/search" ? "text-orange-500" : "text-zinc-500"} hover:text-orange-600 transition-colors`}
              href="/search"
            >
              <FiSearch />
            </Link>
            <div
              className={`${currentPath === "/posts/create" ? "text-orange-500" : "text-zinc-500"} hover:text-orange-600 transition-colors`}
              onClick={handleClick}
            >
              <HiOutlinePencilAlt className="text-xl"/>
            </div>
            <UserMenu currentUser={currentUser} />
          </nav>          
        </div>
      </div>
    </>
  )
}

export default Navbar