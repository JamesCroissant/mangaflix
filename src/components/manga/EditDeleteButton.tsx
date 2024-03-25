'use client';

import { useRouter } from 'next/navigation';

import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { toast } from 'react-hot-toast'

import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { deleteManga } from '@/lib/actions/deleteManga';

type EditDeleteButtonProps = {
  mangaId: string;
};

export const EditDeleteButton = ({
  mangaId
}: EditDeleteButtonProps) => {
  const router = useRouter();

  const handleDelete = async () => {
    if (!mangaId || typeof mangaId !== 'string') {
      throw new Error('Invalid ID');
    }
    try {
      await deleteManga({ mangaId })
      toast.success('Successfully deleted');
      router.push('/');
      router.refresh();
    } catch (error) {
      toast.error('Failed to add manga to favorites');
    }
  };

  return (
    <div className='flex gap-3 items-center'>
      <Button
        variant='outline'
        size='icon'
        className="transition cursor-pointer border-rose-50 bg-rose-50 hover:border-rose-50 hover:bg-rose-100"
        aria-label='Edit Post'
        onClick={() => router.push(`/posts/edit/${mangaId}`)}
      >
        <FiEdit2 size={18} className="text-orange-500" />
      </Button>

      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className="transition cursor-pointer border-rose-50 bg-rose-50 hover:border-rose-50 hover:bg-rose-100"
            aria-label='Delete Post'
          >
            <FiTrash2 size={18} className="text-orange-500" />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently remove your
              data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleDelete}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};