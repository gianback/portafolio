import { projects } from '@/database/projects'
import Image from 'next/image'
import styles from '@/styles/HomeProjects.module.css'

export const HomeProjects = () => {
   return (
      <section className="py-5 desktop:py-20">
         <h2 className="text-2xl tablet:text-3xl laptop:text-4xl desktop:text-5xl font-semibold ">Proyectos</h2>
         <div className={`${styles.HomeProject_list}`}>
            {projects.map(({ description, id, image, name, technologies }) => (
               <article key={id} className="flex flex-col laptop:grid grid-cols-2 gap-4 laptop:gap-10">
                  <picture>
                     <Image src={image} width={1000} height={1000} alt={name} className="w-full" />
                  </picture>
                  <div>
                     <h3 className="font-medium text-xl laptop:text-3xl desktop:text-4xl ">{name}</h3>
                     <p className="text-white text-lg desktop:text-2xl laptop:mt-4">{description}</p>
                  </div>
                  <p className="font-medium">Tecnologías usadas:</p>
                  <div className="flex gap-4">
                     {technologies.map((tech) => (
                        <picture key={tech} className="flex items-center justify-center w-7">
                           <Image src={`/${tech}.svg`} width={150} height={150} alt={tech} />
                        </picture>
                     ))}
                  </div>
               </article>
            ))}
         </div>
      </section>
   )
}
