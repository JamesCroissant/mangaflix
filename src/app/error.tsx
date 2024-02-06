'use client';

import { useEffect } from "react";

import { EmptyResult } from '@/components/layout/EmptyResult';

type ErrorResultProps =  {
  error: Error
}

export default function ErrorResult({ error }: ErrorResultProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return ( 
    <EmptyResult 
      title='Uh Oh...' 
      subtitle='Something went wrong!'
    />
   );
}