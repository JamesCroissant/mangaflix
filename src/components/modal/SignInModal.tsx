'use client';

import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form"
import { useCallback, useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { toast } from 'react-hot-toast'
import { FcGoogle } from "react-icons/fc"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"

import useSignUpModal from '@/hooks/useSignUpModal'
import useSignInModal from "@/hooks/useSignInModal"
import FormField from '../form/FormField'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const schema = z.object({
  email: z.string() .email({ message: 'Not in the form of an email.' }),
  password: z.string() .min(6, { message: 'At least 2 characters must be entered'})
})

export function SignInModal() {
  const router = useRouter()
  const signUpModal = useSignUpModal();
  const signInModal = useSignInModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { email: '', password: ''},
    resolver: zodResolver(schema),
  })


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    try {
      // login
      const res = await signIn('credentials', {
        ...data,
        redirect: false,
      })

      if (res?.error) {
        toast.error('An error has occurred.' + res.error)
      }

      toast.success("You are logged in")
      toggleSignInModal();
      router.refresh()

    } catch (error) {
      toast.error("An error has occurred." + error)
    } finally {
      setIsLoading(false)
    }
  }

  const toggleModal = useCallback(() => {
    signInModal.onClose();
    signUpModal.onOpen();
  }, [signUpModal, signInModal])


  const toggleSignInModal = useCallback(() => {
    if (signInModal.isOpen) {
      signInModal.onClose();
    } else {
      signInModal.onOpen();
    }
  }, [signInModal.isOpen])


  return (
    <Dialog open={signInModal.isOpen} onOpenChange={toggleSignInModal}>
      <DialogContent className='sm:max-w-[425px] max-h-[80%] sm:max-h-full overflow-y-auto gap-2'>
        <DialogHeader>
          <DialogTitle className="text-center text-md">Login</DialogTitle>
        </DialogHeader>
        <Separator className='' />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <FormField
              id="email" 
              label="Email" 
              type="email" 
              name="email" 
              register={register} 
              required
              errors
            />
            <FormField
              id="password" 
              label="Password" 
              type="password" 
              name="password" 
              register={register} 
              required
              errors
            />
            <Button type="submit" className="mt-4 bg-orange-600 hover:opacity-85 hover:bg-orange-600">
              Login
            </Button>
          </div>
        </form>
        <div className="flex items-center justify-between">
          <Separator className='w-[42%]' />
            <p>or</p>
          <Separator className='w-[42%]' />
        </div>

        <DialogFooter>
          <Button
            variant='outline'
            className='w-full flex items-center gap-4 mt-2 mb-5'
            onClick={() => signIn('google')}
          >
            <FcGoogle className='h-4 w-4' />
            Login with Google
          </Button>
          <div className='flex items-center justify-center mt-8 gap-x-2.5 text-sm text-neutral-500'>
            <p>Already have an account?</p>
            <button
              className='text-neutral-800 cursor-pointer hover:underline'
              onClick={toggleModal}
            >
              Sign Up
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}



