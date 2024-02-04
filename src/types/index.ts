import { User } from "@prisma/client";

export type GetAllMangasParams = {
  query?: string
  genre?: string
  category?: string
  sort?: string
}

export type UrlQueryParams = {
  params: string
  key: string
  value: string | null
}

export type RemoveUrlQueryParams = {
  params: string
  keysToRemove: string[]
}

export type SearchParamProps = {
  params: { id: string }
  searchParams: { 
    [key: string]: string | string[] | number |undefined;
  }
}

export type ModalType = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
}

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

