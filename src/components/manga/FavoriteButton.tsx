'use client';

import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { toast } from 'react-hot-toast'

import { SafeUser } from "@/types/user";
import { SafeFavorite } from "@/types/manga";
import { useState } from "react";
import { useRouter } from 'next/navigation';

import useSignInModal from "@/hooks/useSignInModal";
import { addFavoriteManga, deleteFavoriteManga } from "@/lib/actions/favoriteManga";

import { Button } from '@/components/ui/button';

type FavoriteButtonProps = {
  mangaId: string
  currentUser?: SafeUser | null
}


export const FavoriteButton = ({ 
  mangaId,
  currentUser,
}: FavoriteButtonProps) => {
  const router = useRouter();
  const loginModal = useSignInModal();

  const isFavorite = currentUser?.favorites.some(
    (favorite) => favorite.mangaId === mangaId
  );

  const [isFavorited, setIsFavorited] = useState(isFavorite);

  const handleToggleFavorite = async () => {
    if (!mangaId || typeof mangaId !== 'string') {
      throw new Error('Invalid ID');
    }

    if (!currentUser) {
      return loginModal.onOpen();
    }

    if (!isFavorited) {
      try {
        await addFavoriteManga({currentUser, mangaId})
        toast.success('Successfully added from favorites');
        router.refresh();
      } catch (error) {
        toast.error('Failed to add manga to favorites');
      }
    } else {
      const favoriteId = currentUser.favorites.find(
        (favorite) => favorite.mangaId === mangaId
      )?.id;
      if (favoriteId) {
        try {
          await deleteFavoriteManga(favoriteId)
          toast.success('Successfully removed from favorites');
        } catch (error) {
          toast.success('Failed to remove manga from favorites');
        }
      }
    }
    setIsFavorited(!isFavorited)
  }

  return (
    <form action={handleToggleFavorite} className="flex items-center">
      {isFavorited ? (
        <Button
          variant='outline'
          size='icon'
          className="hover:opacity-80 transition cursor-pointer border-none hover:bg-transparent"
          aria-label='Saved Favorite Button'
          onClick={(e) => e.stopPropagation()}
        >
          <FaBookmark size={24} className="w-[15px] fill-orange-500" />
        </Button>
      ) : (
        <Button
          variant='outline'
          size='icon'
          className="hover:opacity-80 transition cursor-pointer border-none hover:bg-transparent"
          aria-label='Not Saved Favorite Button'
          onClick={(e) => e.stopPropagation()}
        >
          <FaRegBookmark size={24} className="fill-slate-400 w-[15px] hover:fill-orange-500"/>
        </Button>
      )}
    </form>
  )
}