import { FormEvent } from 'react'

export const useForm = () => {
   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const formData = new FormData(e.currentTarget)
   }

   return {
      handleSubmit,
   }
}
