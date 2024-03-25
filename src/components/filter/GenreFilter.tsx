'use client';

import * as React from "react"
import { useSearchParams, useRouter } from 'next/navigation';

import { genreLabels } from "@/constants/manga";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

export const GenreFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const onSelectGenre = (genre: string) => {
    let newUrl = "";
      if(genre && genre !== "All") {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'genre',
          value: genre.toLowerCase()
        })
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['genre']
        })
      }
      router.push(newUrl, { scroll: false });
  }


  return (
    <>
      <Select onValueChange={(value: string) => onSelectGenre(value)}>
        <SelectTrigger className="w-[380px] md:w-[180px] focus:border-orange-400 focus:border-2">
          <SelectValue placeholder="Genre" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="All" className="">All</SelectItem>
            {
              Object.entries(genreLabels).length > 0 &&
              Object.entries(genreLabels).map(([key, value]) => (
                <SelectItem
                  key={key}
                  value={key}
                >
                  {value}
                </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

    </>
  )
}