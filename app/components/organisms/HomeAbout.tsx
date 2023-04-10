import Image from "next/image";
import ilustration from "../../public/ilu-programming.svg";
import { Socials } from "../molecules";
export const HomeAbout = () => {
  return (
    <section className="grid grid-cols-2 items-center gap-6 h-[80vh]">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-6xl uppercase text-white font-semibold">
            Gian Franco Peralta
          </h1>
          <p className="text-primary text-4xl mt-4 max-w-[45ch]">
            Poseo{" "}
            <span className="font-bold text-white"> +1 año de experiencia</span>{" "}
            como desarrollador web, me apasiona la tecnología y estoy en busca
            de nuevos retos que me permitan crecer como profesional y aprender
            nuevas habilidades.
          </p>
        </div>
        <Socials />
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
