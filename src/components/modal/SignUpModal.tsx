'use client';

import { useRouter } from 'next/navigation'
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form"
import { useCallback, useState } from 'react'
import { signIn } from 'next-auth/react'

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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Separator } from "@/components/ui/separator"
import { Input } from "../ui/input"

import useSignUpModal from '@/hooks/useSignUpModal'
import useSignInModal from "@/hooks/useSignInModal"
import axios from 'axios'
import { SignUpSchema, signUpResolver } from '@/schema/signup';


export function SignUpModal() {
  const router = useRouter()
  const signUpModal = useSignUpModal()
  const signInModal = useSignInModal()
  const [isLoading, setIsLoading] = useState(false)


  const form = useForm<SignUpSchema>({
    defaultValues: { name:'', email: '', password: ''},
    resolver: signUpResolver,
  })

  const onSubmit = async (formData: SignUpSchema) => {
    setIsLoading(true);
    try {
      // signup
      const res = await axios.post('/api/signup', formData)

      if (res.status === 200) {
        toast.success('created your account')

        // login
        await signIn('credentials', {
          ...formData,
          redirect: false,
        })

        toggleModal();
        router.refresh();
      }
    } catch (error) {
      toast.error("An error has occurred." + error)
    } finally {
      setIsLoading(false);
    }
  }

  const toggleModal = useCallback(() => {
    signUpModal.onClose();
    signInModal.onOpen();
  }, [signUpModal, signInModal])

  const toggleSignUpModal = useCallback(() => {
    if (signUpModal.isOpen) {
      signUpModal.onClose();
    } else {
      signUpModal.onOpen();
    }
  }, [signUpModal.isOpen])

  
  return (
    <>
      <Dialog open={signUpModal.isOpen} onOpenChange={toggleSignUpModal}>
        <DialogContent className='sm:max-w-[425px] max-h-[80%] sm:max-h-full overflow-y-auto gap-2'>
          <DialogHeader>
            <DialogTitle className="text-center text-md">Sign Up</DialogTitle>
          </DialogHeader>
          <Separator className='' />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-4 py-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm md:text-base">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="hamham" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm md:text-base">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="sample@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm md:text-base">Password</FormLabel>
                      <FormControl>
                        <Input placeholder="123456" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="mt-4 bg-orange-600 hover:opacity-85 hover:bg-orange-600">
                  Sign Up
                </Button>
              </div>
            </form>
          </Form>
          
   
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
              Sign Up with Google
            </Button>
            <div className='flex items-center justify-center mt-8 gap-x-2.5 text-sm text-neutral-500'>
              <p>Don't have an account yet?</p>
              <button
                className='text-neutral-800 cursor-pointer hover:underline'
                onClick={toggleModal}
              >
                Login
              </button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
    </>
  )
}
