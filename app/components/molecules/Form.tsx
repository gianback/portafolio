import { useForm } from '@/hooks'
import { Button, Loader } from '../atoms'

export const Form = () => {
   const { handleSubmit, emailError, isLoading, response } = useForm()

   return (
      <form className="flex flex-col gap-5 mt-4 laptop:mt-8 laptop:gap-8" onSubmit={handleSubmit}>
         <div className="flex flex-col gap-5 laptop:grid grid-cols-2 laptop:gap-12">
            <div className="flex flex-col gap-2">
               <label className="text-xl">Nombre completo:</label>
               <input
                  type="text"
                  placeholder="Gian Franco Peralta Bravo"
                  id="name"
                  name="name"
                  className="bg-black/50 border border-white text-white font-medium px-4 py-2 rounded-lg outline-none"
               />
            </div>
            <div className="flex flex-col gap-2 ">
               <label className="text-xl">Email:</label>
               <input
                  type="email"
                  id="email"
                  placeholder="gianfraback@gmail.com"
                  name="email"
                  className="bg-black/50 border border-white text-white font-medium  px-4 py-2 rounded-lg outline-none"
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
               className="bg-black/50 border border-white text-white font-medium px-4 py-2 rounded-lg outline-none h-36"
            ></textarea>
         </div>
         <div className="relative">
            <Button disabled={isLoading}>Enviar</Button>
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
   )
}
