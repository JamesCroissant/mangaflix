import { create } from 'zustand'
import { ModalType } from '@/types'

const useSignInModal = create<ModalType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false}), 
}))

export default useSignInModal