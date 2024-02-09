'use client';

import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { toast } from 'react-hot-toast'

import { SafeUser } from "@/types";
import { useState } from "react";
import { useRouter } from 'next/navigation';

import useSignInModal from "@/hooks/useSignInModal";
import { toggleFavoriteManga } from "@/lib/actions/favoriteManga";


type FavoriteButtonProps = {
  mangaId: number
  currentUser?: SafeUser | null
}


export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ 
  mangaId,
  currentUser,
}) => {
  const router = useRouter();
  const loginModal = useSignInModal();
  const isFavorite = currentUser?.favoriteIds.some(
    (favoriteId: number) => favoriteId === mangaId
  );
  const [isFavorited, setIsFavorited] = useState(isFavorite);

  const handleFavorite = async () => {
    if (!mangaId || typeof mangaId !== 'number') {
      throw new Error('Invalid ID');
    }

    if (!currentUser) {
      return loginModal.onOpen();
    }

    try {
      await toggleFavoriteManga({currentUser, mangaId})
      setIsFavorited(!isFavorited)
      toast.success(isFavorited ? 'Removed from favorites' : 'Added to favorites');
      router.refresh();
    } catch (error) {
      toast.error('Failed to update favorites');
    }
  }

  return (
    <form action={handleFavorite}>
      <button 
        className="
          hover:opacity-80
          transition
          cursor-pointer
        "
      >
        {isFavorited ?
          <FaBookmark
            size={24}
            className="
              absolute
              top-3
              right-3.5
              w-[15px]
              fill-orange-500
            "
          />
          :
          <FaRegBookmark
            size={28}
            className="
              fill-slate-400
              absolute
              top-3
              right-3.5
              w-[15px]
              hover:fill-orange-500
            "
          />
        }
      </button>
    </form>
    
   );
}