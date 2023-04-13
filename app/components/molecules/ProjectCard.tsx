import Image from "next/image";
import { CodeIcon, SendIcon } from "../atoms";

interface ProjectCardProps {
  image: string;
  name: string;
  description: string;
  technologies: string[];
  url: string;
  code?: string;
}

export const ProjectCard = ({
  description,
  image,
  name,
  technologies,
  url,
  code,
}: ProjectCardProps) => {
  return (
    <article className="flex flex-col laptop:grid grid-cols-2 gap-4 laptop:gap-14">
      <picture>
        <Image
          src={image}
          width={1000}
          height={1000}
          alt={name}
          className="w-full h-full"
        />
      </picture>
      <div>
        <h3 className="font-medium text-xl laptop:text-3xl desktop:text-4xl ">
          {name}
        </h3>
        <p className="text-white text-lg desktop:text-2xl laptop:mt-4">
          {description}
        </p>
        <p className="font-medium mt-4 text-xl">Tecnologías usadas:</p>
        <div className="flex gap-4 mt-4 ">
          {technologies.map((tech) => (
            <picture
              key={tech}
              className="flex items-center justify-center w-7"
              title={tech.toUpperCase()}
            >
              <Image src={`/${tech}.svg`} width={150} height={150} alt={tech} />
            </picture>
          ))}
        </div>
        <div className="flex gap-4 laptop:gap-6 mt-4 laptop:mt-6">
          <a
            href={url}
            target="_blank"
            className="flex gap-3 items-center bg-primary text-black font-medium py-2 laptop:py-3 px-4 laptop:px-6 laptop:text-lg rounded-lg hover:bg-white transition-all duration-75 ease-linear"
          >
            Ver sitio
            <span className="w-full flex-1">
              <SendIcon />
            </span>
          </a>
          {code && (
            <a
              href={code}
              target="_blank"
              className="flex gap-3 items-center bg-primary text-black font-medium py-2 laptop:py-3 px-4 laptop:px-6 laptop:text-lg rounded-lg hover:bg-white transition-all duration-75 ease-linear"
            >
              Ver código
              <span className="w-full flex-1">
                <CodeIcon />
              </span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
