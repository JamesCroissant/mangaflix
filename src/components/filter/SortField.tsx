'use client';

import * as React from "react"
import { useSearchParams, useRouter } from 'next/navigation';

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


export const SortField = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSelectSort = (sortOrder: string) => {
    let newUrl = "";
      if(sortOrder && sortOrder !== "Default") {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'sort',
          value: sortOrder.toLowerCase()
        })
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['sort']
        })
      }
      router.push(newUrl, { scroll: false });
  }

  return (
    <>
      <Select onValueChange={(value: string) => onSelectSort(value)}>
        <SelectTrigger className="w-[380px] md:w-[180px] focus:border-orange-400 focus:border-2">
          <SelectValue placeholder="Sort" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="Default" className="">Default</SelectItem>
            <SelectItem value="ascending">A → Z</SelectItem>
            <SelectItem value="descending">Z → A</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};