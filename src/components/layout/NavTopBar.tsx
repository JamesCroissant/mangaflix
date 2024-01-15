"use client"

import Link from "next/link"
import classNames from "classnames"
import { usePathname } from "next/navigation"


const NavTopBar = () => {
  const currentPath = usePathname()

  const getLinkClassNames = (path: string) => classNames({
    "text-orange-500": path === currentPath,
    "text-zinc-500": path !== currentPath,
    "hover:text-orange-600 transition-colors": true,
  })

  const links = [
    { label: "Home", href: "/" },
    { label: "Search", href: "/search" },
    { label: "Favorite", href: "/favorites" },
    { label: "Account", href: "/account" },
  ]

  return (
    <nav className="flex gap-6 items-center">
      {links.map(link => 
        <Link
          key={link.href}
          className={getLinkClassNames(link.href)}
          href={link.href}
        >
          {link.label}
        </Link>
      )}
    </nav>
  )
}

export default NavTopBar