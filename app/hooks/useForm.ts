import { FormEvent, useState } from "react";

export const useForm = () => {
  const [emailError, setEmailError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    if (!formData.get("email")) {
      setEmailError("Email es requerido");

      setTimeout(() => {
        setEmailError("");
      }, 4000);

      return;
    }

    setIsLoading(true);

    try {
      const resp = await fetch(`${process.env.NEXT_PUBLIC_FORMSPREE_URL}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });
      const { ok } = await resp.json();
      if (ok) {
        setResponse(
          "¡Tu mensaje ha sido enviado, gracias por comunicarte conmigo!."
        );
      }
      setTimeout(() => {
        setResponse("");
      }, 4000);
      const formstate = Object.fromEntries(formData);
      for (const key of Object.keys(formstate)) {
        const element = document.getElementById(`${key}`) as HTMLInputElement;
        if (element) {
          element.value = "";
        }
      }
    } catch (error) {
      setResponse("Algo salío mal, intente de nuevo.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    emailError,
    response,
    isLoading,
  };
};
