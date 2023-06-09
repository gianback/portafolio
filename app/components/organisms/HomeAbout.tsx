import Image from "next/image";
import ilustration from "../../public/ilu-programming.svg";
import { Socials } from "../molecules";
import styles from "@/styles/HomeAbout.module.css";
export const HomeAbout = () => {
  return (
    <section className={`${styles.HomeAbout}`} data-section="/">
      <div className="tablet:flex justify-center flex-col items-center laptop:block">
        <div>
          <h1 className="text-2xl tablet:text-5xl desktop:text-6xl tablet:text-center laptop:text-left  text-white font-bold mt-6">
            Gian Franco Peralta Bravo
          </h1>
          <p className="text-primary font-medium text-xl tabletxl:text-2xl desktop:text-4xl mt-4 max-w-[45ch] tablet:text-center laptop:text-left">
            Cuento con{" "}
            <span className="font-bold text-white">
              {" "}
              más de un año de experiencia
            </span>{" "}
            como desarrollador web, trabajo con ReactJs, NextJS, Typescript,
            TailwindCss, Vuejs, etc. Me apasiona la tecnología y estoy en busca
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
          height={364}
          alt="Gian Franco Programming"
        />
      </picture>
    </section>
  );
};
