import { useForm } from '@/hooks'
import { Loader } from '../atoms/Loader'

export const HomeContact = () => {
   const { handleSubmit, emailError, isLoading, response } = useForm()

   return (
      <section className="py-8 laptop:py-14" data-section="/contact">
         <h2 className="text-2xl tablet:text-3xl laptop:text-4xl desktop:text-5xl font-semibold">Contacto</h2>
         <p className="text-xl laptop:text-2xl mt-2 laptop:mt-4">
            Si estás interesado en contactarme, ¡No dudes en hacerlo!
         </p>
         <form className="flex flex-col gap-5 mt-4 laptop:gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 laptop:grid grid-cols-2 laptop:gap-12">
               <div className="flex flex-col gap-2">
                  <label className="text-xl">Nombre completo:</label>
                  <input
                     type="text"
                     placeholder="Cristiano Ronaldo"
                     id="name"
                     name="name"
                     className="text-gray-500 px-4 py-2 rounded-lg outline-none"
                  />
               </div>
               <div className="flex flex-col gap-2 ">
                  <label className="text-xl">Email:</label>
                  <input
                     type="email"
                     id="email"
                     placeholder="cristianocr7@gmail.com"
                     name="email"
                     className="text-gray-500 px-4 py-2 rounded-lg outline-none"
                  />
                  {emailError && <p className="text-red-400">{emailError}</p>}
               </div>
            </div>
            <div className="flex flex-col gap-2">
               <label className="text-xl">Mensaje:</label>
               <textarea
                  name="message"
                  id="message"
                  placeholder="Me gustaría contactarte..."
                  className="text-gray-500 px-4 py-2 rounded-lg outline-none h-36"
               ></textarea>
            </div>
            <div className="relative">
               <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-block bg-primary text-black font-medium py-2 laptop:py-4 px-4 laptop:px-8 laptop:text-lg rounded-lg hover:bg-white transition-all duration-75 ease-linear "
               >
                  Enviar
               </button>
               {isLoading && <Loader />}
               {response && (
                  <p
                     className={`${
                        emailError.length > 0 ? 'text-red-400' : 'text-primary'
                     } mt-4 font-medium text-lg laptop:text-xl `}
                  >
                     {response}
                  </p>
               )}
            </div>
         </form>
      </section>
   )
}
