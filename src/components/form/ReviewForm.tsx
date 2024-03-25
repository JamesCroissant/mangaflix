import { useCallback } from "react";

import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form"

import { StarRating } from "../manga/StarRating";
import { ReviewSchema } from "@/schema/review";
import { UseFormReturn } from 'react-hook-form';

import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";


type ReviewFormProps = {
  form: UseFormReturn<ReviewSchema>
  onSubmit: (formData: ReviewSchema) => void;
}

export const ReviewForm = ({ onSubmit, form }: ReviewFormProps) => {

  const { handleSubmit, setValue, watch, control } = form

  const handleRating = useCallback((rate: number) => {
    setValue('rating', rate);
  }, []);

  return (
    <>
      <Form {...form}>
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className=""
        >
          <div className="my-2 text-md flex gap-x-2 justify-start items-end text-slate-500">
            <div className="flex flex-col"> 
              <StarRating onClick={handleRating} />
              <FormField
                control={control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                    <Input
                      type='number'
                      className='hidden'
                      {...field}
                    />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            { watch('rating').toFixed(1) }
            
          </div>
          <FormField
            control={control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                <Textarea
                  placeholder='Comment about this manga here!'
                  className="focus-visible:border-orange-500 focus:border-2"
                  {...field}
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="w-full my-8 py-2 text-md bg-orange-500 hover:opacity-85 hover:bg-orange-600"
          >
            Comment
          </Button>
        </form>
      </Form>
    
    </>
  )
}