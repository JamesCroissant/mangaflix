import React from 'react';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { FieldValues, UseFormRegister } from "react-hook-form"

type FormFieldProps = {
  id: string
  label: string
  type?: string
  name: string
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: any
};

const FormField: React.FC<FormFieldProps> = ({ 
  id,
  label,
  type,
  name,
  required,
  register,
  errors,
}) => {
  return (
    <div className="grid grid-cols-4 items-center gap-2">
      <Label htmlFor={name}>
        {label}
      </Label>
      <Input
        type={type}
        id={id}
        className={`col-span-4 focus-visible:border-orange-500 focus:border-2
          ${
            errors[id]
              ? 'border-red-500 focus:border-red-500'
              : 'border-neutral-300 focus:border-sky-500'
          }
        `}
        placeholder={name}
        {...register(id, { required })}
      />
    </div>
  )
}

export default FormField