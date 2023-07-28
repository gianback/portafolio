import Image from "next/image";
import ilustration from "../../public/ilu-programming.svg";
import { Socials } from "../molecules";
import styles from "@/styles/HomeAbout.module.css";
export const HomeAbout = () => {
  return (
    <section data-section="/">
      <div className={`${styles.HomeAbout}`}>
        <div className="tablet:flex justify-center flex-col items-center laptop:block">
          <div>
            <h1 className="text-2xl tablet:text-5xl desktop:text-6xl tablet:text-center laptop:text-left  text-white font-bold mt-6">
              Gian Franco Peralta Bravo
            </h1>
            <p className="text-primary font-medium text-xl tabletxl:text-2xl desktop:text-4xl mt-4 max-w-[45ch] tablet:text-center laptop:text-left">
              {" "}
              <span className="font-bold text-white">
                Desarrollador Frontend con +1 año{" "}
              </span>{" "}
              de experiencia, me gusta escribir con código limpio y eficiente
              para abordar problemas y satisfacer las necesidades de los
              usuarios de manera efectiva.
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
      </div>
      <div className="mt-36 mb-20">
        <h2 className="text-2xl tablet:text-3xl laptop:text-4xl desktop:text-5xl font-semibold ">
          Sobre mi
        </h2>
        <p className="text-white text-lg desktop:text-2xl laptop:mt-4">
          Completé mi carrera técnica en Administración de Empresas, pero mi
          verdadera pasión por el desarrollo web me llevó a explorar de forma
          autodidacta cursos en línea. Desde entonces, me enamoré de la idea de
          crear productos digitales con mis propias manos y ponerlos al alcance
          y uso de miles de personas.
        </p>
      </div>
    </section>
  );
};
