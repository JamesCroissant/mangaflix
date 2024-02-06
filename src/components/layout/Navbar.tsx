"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { FiSearch } from "react-icons/fi";
import { UserMenu } from '@/components/layout/UserMenu';

import { SafeUser } from "@/types";


type navbarProps = {
  currentUser?: SafeUser | null;
};

const Navbar:React.FC<navbarProps> = ({ currentUser }) => {
  const currentPath = usePathname()

  return (
    <>
      <div className="fixed w-full bg-white z-10 shadow-sm">
        <div className="py-3 border-b-[1px] flex justify-evenly">
          <Link href="/">
            <h1 className="text-2xl font-semibold text-left text-orange-500">
              Manga Flix
            </h1>
          </Link>
          <nav className="flex gap-6 items-center">
            <Link
              key='/search'
              className={`${currentPath === "/search" ? "text-orange-500" : "text-zinc-500"} hover:text-orange-600 transition-colors`}
              href="/search"
            >
              <FiSearch /> 
            </Link>
            <UserMenu currentUser={currentUser} />
          </nav>          
        </div>
      </div>
    </>
  )
}

export default Navbar