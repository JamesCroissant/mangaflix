'use client';

import { useState } from 'react'
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form"
import { useRouter } from 'next/navigation'

import { Input } from "@/components/ui/input"
import { Textarea } from '@/components/ui/textarea'
import { Button } from "@/components/ui/button"
import { Label } from '@/components/ui/label'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { toast } from 'react-hot-toast'

import { genreLabels, categoryLabels, statusLabels } from '@/constants/manga'

import { zodResolver } from '@hookform/resolvers/zod'
import { ImageUpload } from '../manga/ImageUpload'
import { mangaSchema, MangaSchema } from '@/schema/manga'
import { createManga } from '@/lib/actions/createManga'
import { useImagePreview } from '@/hooks/useImagePreview';


export const CreatePostForm = () => {
  const form = useForm<MangaSchema>({
    defaultValues: { 
      title: '',
      author: '',
      description: '',
      link: '',
      image: '',
      comment: '',
    },
    resolver: zodResolver(mangaSchema),
  })

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = form;

  const { imagePreview, onChangeUploadImage, deleteImage } =
    useImagePreview(null, setValue);

  const onSubmit = async (formData: MangaSchema) => {
    try {
      await createManga(formData);
      router.push('/posts');
      router.refresh();
      toast.success('Successfully created your manga');
    } catch (error) {
      toast.error('Failed to create your manga');
    }
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between px-12 md:px-32 py-8">
        <Form {...form}>
          <form 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="max-w-wd w-full space-y-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm md:text-base">Title</FormLabel>
                  <FormControl>
                    <Input placeholder="One Piece" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm md:text-base">Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Yoichiro Oda" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm md:text-base">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="One Piece is a thrilling adventure manga about a young pirate named Luffy, who searches for the world's ultimate treasure, the One Piece, to become the Pirate King."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm md:text-base">Link</FormLabel>
                  <FormControl>
                    <Input placeholder="http://books.google.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className='mb-4'>
              <Label className='text-sm md:text-base'>Photo</Label>
              <ImageUpload
                value={imagePreview}
                onChangeUploadImage={onChangeUploadImage}
              />
              {imagePreview && (
                <Button
                  variant='outline'
                  size='sm'
                  className='mt-2 text-right absolute'
                  onClick={deleteImage}
                >
                  Delete Photo
                </Button>
              )}
            </div>

            <div className="flex flex-column sm:flex-row sm:justify-between pt-8">
              <FormField
                control={form.control}
                name='genre'
                aria-label='genre'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm md:text-base'>Genre</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full md:w-[180px] lg:w-[220px] focus:border-orange-400 focus:border-2">
                            <SelectValue placeholder='Select a genre type' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.entries(genreLabels).map(([key, value]) => (
                            <SelectItem
                              key={key}
                              value={key}
                              className='text-sm md:text-base'
                            >
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='category'
                aria-label='category'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm md:text-base'>Category</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full  md:w-[180px] lg:w-[220px] focus:border-orange-400 focus:border-2">
                            <SelectValue placeholder='Select a category type' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.entries(categoryLabels).map(([key, value]) => (
                            <SelectItem
                              key={key}
                              value={key}
                              className='text-sm md:text-base'
                            >
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='status'
                aria-label='status'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-sm md:text-base'>Status</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full  md:w-[180px] lg:w-[220px] focus:border-orange-400 focus:border-2">
                            <SelectValue placeholder='Select a status type' />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.entries(statusLabels).map(([key, value]) => (
                            <SelectItem
                              key={key}
                              value={key}
                              className='text-sm md:text-base'
                            >
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm md:text-base">Comment</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="One Piece is amazing!"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full text-sm md:text-base bg-orange-600 hover:bg-orange-600 hover:opacity-90">
              Submit
            </Button>
          </form>
        </Form>
      </main>
    </>
  )
}