"use client"

import Link from "next/link"
import classNames from "classnames"
import { usePathname } from "next/navigation"

import { RiHomeFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaBookmark } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

const NavBottomBar = () => {
  const currentPath = usePathname()

  const getLinkClassNames = (path: string) => classNames({
    "text-orange-500": path === currentPath,
    "text-zinc-500": path !== currentPath,
    "hover:text-orange-600 transition-colors": true,
  })

  const links = [
    { label: "Home", href: "/", component: <RiHomeFill />},
    { label: "Search", href: "/search", component: <FiSearch /> },
    { label: "Favorite", href: "/favorites", component: <FaBookmark /> },
    { label: "Account", href: "/account", component: <FaUser /> },
  ]

  return (
    <nav className="flex gap-8 sm:gap-20 items-center">
      {links.map(link => 
        <Link
          key={link.href}
          className={getLinkClassNames(link.href)}
          href={link.href}
        >
        <div className="flex flex-col items-center">
          <div className="text-2xl">
            {link.component}
          </div>
          <div className="mt-1">
            {link.label}
          </div>
        </div>
        </Link>
      )}
    </nav>
  )
}

export default NavBottomBar

