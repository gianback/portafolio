import { useForm } from '@/hooks'
import { useState } from 'react'

const INITIAL_FORM_STATE = {
   name: '',
   email: '',
   message: '',
}

export const HomeContact = () => {
   const [formState, setFormState] = useState()
   const { handleSubmit } = useForm()
   return (
      <section className="py-5" data-section="/contact">
         <h2 className="text-3xl laptop:text-5xl font-semibold ">Contacto</h2>
         <p>Si estás interesado en contactarme no dudes en hacerlo!</p>
         <form className="flex flex-col gap-5 mt-4 laptop:gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 laptop:grid grid-cols-2 laptop:gap-12">
               <div className="flex flex-col gap-2">
                  <label>Tus nombres:</label>
                  <input
                     type="text"
                     placeholder="Jhon Doe"
                     name="name"
                     className="text-gray-500 px-4 py-2 rounded-lg outline-none"
                  />
               </div>
               <div className="flex flex-col gap-2 ">
                  <label>Tu Email:</label>
                  <input
                     type="email"
                     placeholder="ejemplo@ejemplo.com"
                     name="email"
                     className="text-gray-500 px-4 py-2 rounded-lg outline-none"
                  />
               </div>
            </div>
            <div className="flex flex-col gap-2">
               <label>Tu mensaje:</label>
               <textarea
                  name="message"
                  placeholder="Me gustaría contactarte"
                  className="text-gray-500 px-4 py-2 rounded-lg outline-none h-36"
               ></textarea>
            </div>
            <div>
               <button
                  type="submit"
                  className="inline-block bg-primary text-black font-medium py-2 laptop:py-4 px-2 laptop:px-8 laptop:text-lg rounded-lg hover:bg-white transition-all duration-75 ease-linear "
               >
                  Enviar
               </button>
            </div>
         </form>
      </section>
   )
}
