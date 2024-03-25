'use client';

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback, useRef, RefObject, useState } from "react";
import { TbPhotoPlus } from 'react-icons/tb'
import { Input } from "../ui/input";

declare global {
  var cloudinary: any
}

type ImageUploadProps = {
  onChangeUploadImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | null;
};


export const ImageUpload = ({ onChangeUploadImage, value }: ImageUploadProps) => {

  return (
    <>
      <div
        className="
          relative
          cursor-pointer
          hover:opacity-70
          transition
          border-dashed 
          border-2 
          p-20 
          border-neutral-300
          flex
          flex-col
          justify-center
          items-center
          text-neutral-600
          mt-2
        "
      >
        <input
          type='file'
          id='image'
          name='image'
          accept='image/*'
          className='absolute inset-0 h-full w-full opacity-0 z-20 mt-0 cursor-pointer'
          onChange={(e) => onChangeUploadImage(e)}
        />
        
        <TbPhotoPlus
          size={50}
        />
        <div className="font-semibold text-lg">
          Click to upload
        </div>

        {value && (
          <div className="absolute inset-0 w-full h-full">
            <Image
              fill 
              style={{ objectFit: 'cover' }} 
              src={value} 
              alt="image"
            />
          </div>
        )}
      </div>
    </>
    
  )
}