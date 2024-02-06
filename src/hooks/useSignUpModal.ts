import { create } from 'zustand'
import { ModalType } from '@/types'

const useSignupModal = create<ModalType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false}), 
}))

export default useSignupModal