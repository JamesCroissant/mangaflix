'use client';

import * as React from "react"
import { useSearchParams, useRouter } from 'next/navigation';

import { categories } from "@/data/manga";

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


export const CategoryFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  
  const onSelectCategory = (category: string) => {
    let newUrl = "";
      if(category && category !== "All") {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'category',
          value: category.toLowerCase()
        })
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['category']
        })
      }
      router.push(newUrl, { scroll: false });
  }

  return (
    <>
      <Select onValueChange={(value: string) => onSelectCategory(value)}>
        <SelectTrigger className="w-[380px] md:w-[180px] focus:border-orange-400 focus:border-2">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="All">All</SelectItem>
            {categories.length > 0 && categories.map((category, index) => (
              <SelectItem
                key={index}
                value={category}
              >
                {category}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

    </>
  )
}