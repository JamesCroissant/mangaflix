import { useState, useEffect } from 'react';
import { UseFormSetValue } from 'react-hook-form';
import { MangaSchema } from '@/schema/manga';

export const useImagePreview = (
  defaultImage: string | null | undefined,
  setValue: UseFormSetValue<MangaSchema>
) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    setImagePreview(defaultImage || null);
  }, [defaultImage]);

  const onChangeUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0] as File;

    try {
      const fileBuffer = await file.arrayBuffer();

      const mime = file.type;
      const encoding = 'base64';
      const base64Data = Buffer.from(fileBuffer).toString('base64');
      const fileUrl = 'data:' + mime + ';' + encoding + ',' + base64Data;
  
      setValue('image', fileUrl);
      setImagePreview(fileUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const deleteImage = () => {
    setValue('image', null);
    setImagePreview(null);
  };

  return {
    imagePreview,
    onChangeUploadImage,
    deleteImage,
  };
};