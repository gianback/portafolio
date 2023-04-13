import { projects } from "@/database/projects";
import Image from "next/image";
import styles from "@/styles/HomeProjects.module.css";
import { CodeIcon, SendIcon } from "../atoms";
import { ProjectCard } from "../molecules";

export const HomeProjects = () => {
  return (
    <section className="py-5 desktop:py-20" data-section="/projects">
      <h2 className="text-2xl tablet:text-3xl laptop:text-4xl desktop:text-5xl font-semibold ">
        Proyectos
      </h2>
      <div className={`${styles.HomeProject_list}`}>
        {projects.map(
          ({ description, id, image, name, technologies, url, code }) => (
            <ProjectCard
              key={id}
              description={description}
              image={image}
              name={name}
              technologies={technologies}
              url={url}
              code={code}
            />
          )
        )}
      </div>
    </section>
  );
};
