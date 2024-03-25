'use client'

import { useRouter } from 'next/navigation';
import { signOut } from "next-auth/react";

import { toast } from 'react-hot-toast'
import { FaUser } from "react-icons/fa6";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import useSignUpModal from '@/hooks/useSignUpModal'
import useSignInModal from "@/hooks/useSignInModal"

import { SafeUser } from '@/types/user'

type userMenuProps = {
  currentUser?: SafeUser | null;
};

export function UserMenu({ currentUser }: userMenuProps) {
  const router = useRouter()
  const signUpModal = useSignUpModal()
  const signInModal = useSignInModal()

  const logoutHandler = () => {
    signOut({ callbackUrl: '/' });
    toast.success('You are logged out.');
  }

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Avatar>
            <AvatarImage src={currentUser?.image || ''} />
            <AvatarFallback>
              <FaUser /> 
            </AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent>
          {currentUser ? (
            <>
              <MenubarItem
                onClick={() => router.push('/posts')}
              >
                My Posts
              </MenubarItem>
              <MenubarItem
                onClick={() => router.push('/favorites')}
              >
                My Favorites
              </MenubarItem>
              <MenubarItem
                onClick={() => router.push('/profile')}
              >
                Profile
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem
                onClick={logoutHandler}
              >
                Log Out
              </MenubarItem>
            </>
          ) : (
            <>
              <MenubarItem
                onClick={signInModal.onOpen}
              >
                Log In
              </MenubarItem>
              <MenubarItem
                onClick={signUpModal.onOpen}
              >
                Sign Up
              </MenubarItem>
            </>
          )
          }
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}