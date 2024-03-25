"use client"

import useSignUpModal from '@/hooks/useSignUpModal'
import useSignInModal from "@/hooks/useSignInModal"
import { useRouter } from 'next/navigation';

import { Button } from "../ui/button"
import { SafeUser } from "@/types/user"

import { FiSearch } from "react-icons/fi"
import { FeatureCard } from './FeatureCard'


type MainProps = {
  currentUser?: SafeUser | null;
};

export const Main = ({ currentUser }: MainProps) => {
  const router = useRouter();
  const signUpModal = useSignUpModal()
  const signInModal = useSignInModal()

  const handleClick = () => {
    router.push('/search');
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-semibold my-4">Welcome to MangaFlix!</h1>
        <div className="mt-4 mb-10">This app can be shared your favorite manga for others!</div>
        <div className="flex gap-x-4">
          {!currentUser && (
            <>
              <Button
                variant='outline'
                onClick={signInModal.onOpen}
                className="transition cursor-pointer bg-white text-black border-solid border-slate-100 hover:bg-slate-100"
              >
                Login
              </Button>
              <Button
                variant='outline'
                onClick={signUpModal.onOpen}
                className="text-white hover:text-white border-orange-500 bg-orange-500 hover:bg-orange-600"
              >
                SignUp
              </Button>
            </>
          )}
        </div>
        <FeatureCard />
        <div className="mt-4 mb-10 text-xl">Let"s discover your favorite manga!</div>
        <Button
          variant='outline'
          onClick={handleClick}
          className="transition cursor-pointer bg-white text-black border-solid border-slate-100 hover:bg-slate-100"
        >
          Search
          <FiSearch className="mx-2"/>
        </Button>
      </div>
    </div>
  )
}
