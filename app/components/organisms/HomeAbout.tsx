import Image from "next/image";
import ilustration from "../../public/ilu-programming.svg";
import { GithubIcon, LinkedinIcon } from "../atoms";
export const HomeAbout = () => {
  return (
    <section className="grid grid-cols-2 items-center gap-6 h-[80vh]">
      <div className="flex flex-col gap-6">
        <span className="text-3xl">Sobre mi:</span>
        <h1 className="text-primary text-4xl max-w-[45ch]">
          Poseo{" "}
          <span className="font-bold text-white">9 meses de experiencia</span>{" "}
          como desarrollador web, me apasiona la tecnología y estoy en busca de
          nuevos retos que me permitan crecer como profesional y aprender nuevas
          habilidades.
        </h1>
        <LinkedinIcon />
        <GithubIcon />
      </div>
      <picture className="flex items-center justify-center">
        <Image
          src={ilustration.src}
          width={500}
          height={400}
          alt="Gian Franco Programming"
        />
      </picture>
    </section>
  );
};
