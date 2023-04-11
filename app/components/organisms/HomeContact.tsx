import { FormEvent } from 'react'

export const HomeContact = () => {
   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
   }

   return (
      <section className="py-5">
         <h2 className="text-3xl laptop:text-5xl font-semibold ">Contacto</h2>
         <p>Si estás interesado en contactarme no dudes en hacerlo!</p>
         <form className="flex flex-col gap-5 mt-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
               <label>Tus nombres:</label>
               <input
                  type="text"
                  placeholder="Jhon Doe"
                  name="name"
                  className="text-gray-500 px-4 py-2 rounded-lg outline-none"
               />
            </div>
            <div className="flex flex-col">
               <label>Tu Email:</label>
               <input
                  type="email"
                  placeholder="ejemplo@ejemplo.com"
                  name="email"
                  className="text-gray-500 px-4 py-2 rounded-lg outline-none"
               />
            </div>
            <div className="flex flex-col">
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
                  className="inline-block bg-primary text-black font-medium py-2 px-2 rounded-lg hover:bg-white transition-all duration-75 ease-linear "
               >
                  Enviar
               </button>
            </div>
         </form>
      </section>
   )
}
