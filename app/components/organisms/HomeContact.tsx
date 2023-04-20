import { Form } from "../molecules/Form";

export const HomeContact = () => {
  return (
    <section
      className="py-8 laptop:py-14 laptop:w-1/2 laptop:mx-auto"
      data-section="/contact"
    >
      <h2 className="text-3xl laptop:text-5xl font-semibold laptop:text-center ">
        Contacto
      </h2>
      <p className="text-xl laptop:text-2xl mt-2 laptop:mt-4 laptop:text-center">
        Si estás interesado en contactarme, ¡no dudes en hacerlo!
      </p>
      <Form />
    </section>
  );
};
