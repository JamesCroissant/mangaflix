'use client'

import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";


export const KeywordFilter = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newUrl = "";
      if(query) {
        newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'query',
          value: query.toLowerCase()
        })
      } else {
        newUrl = removeKeysFromQuery({
          params: searchParams.toString(),
          keysToRemove: ['query']
        })
      }

      router.push(newUrl, { scroll: false });
    }, 300)

    return () => clearTimeout(delayDebounceFn)
    
  }, [query, searchParams, router])

  return (
    <form className="relative block">
      <button>
        <FiSearch
          className="absolute top-10 left-3 text-gray-500"
        />
      </button>
      <span className="sr-only"></span>
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
      </span>
      <input 
        className="placeholder:text-slate-500 block w-[380px] border border-slate-200 rounded-xl py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-400 focus:ring-orange-400 focus:ring-1 sm:text-sm" 
        placeholder="One Piece" 
        type="text" 
        name="search"
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};

