import { projects } from "@/database/projects";
import Image from "next/image";
import styles from "../../styles/HomeProjects.module.css";

export const HomeProjects = () => {
  return (
    <section className="py-5 laptop:py-20">
      <h2 className="text-5xl font-semibold uppercase">Proyectos</h2>
      <div className={`${styles.HomeProject_list}`}>
        {projects.map(({ description, id, image, name }) => (
          <article key={id} className="grid grid-cols-2 gap-10">
            <picture>
              <Image
                src={image}
                width={1000}
                height={1000}
                alt={name}
                className="w-full"
              />
            </picture>
            <div className="flex flex-col justify-end">
              <h1 className="font-medium uppercase text-4xl ">{name}</h1>
              <p className="text-white text-2xl mt-4">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
