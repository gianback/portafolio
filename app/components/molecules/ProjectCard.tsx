import Image from "next/image";
import { Button, CodeIcon, SendIcon } from "../atoms";

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
        <div className="laptop:flex gap-4">
          <p className="font-medium mt-4 text-xl">Tecnologías usadas:</p>
          <div className="flex gap-4 mt-4 ">
            {technologies.map((tech) => (
              <picture
                key={tech}
                className="flex items-center justify-center w-7"
                title={tech.toUpperCase()}
              >
                <Image
                  src={`/${tech}.svg`}
                  width={150}
                  height={150}
                  alt={tech}
                />
              </picture>
            ))}
          </div>
        </div>
        <div className="flex gap-4 laptop:gap-6 mt-4 laptop:mt-6">
          <Button url={url}>
            Sitio
            <span className="w-3 flex-1">
              <SendIcon />
            </span>
          </Button>

          {code && (
            <Button url={code}>
              Código
              <span className="w-full flex-1">
                <CodeIcon />
              </span>
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};
