import Link from "next/link";
import { FC, ReactNode } from "react";

interface ButtonProps {
  url?: string;
  children: ReactNode;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({ url, children, disabled }) => {
  const styleBtn =
    "flex gap-3 items-center bg-primary text-black font-medium py-2 laptop:py-3 px-4 laptop:px-6 laptop:text-lg rounded-lg hover:bg-white transition-all duration-75 ease-linear";
  return (
    <>
      {url ? (
        <Link href={url} target="_blank" className={styleBtn}>
          {children}
        </Link>
      ) : (
        <button disabled={disabled} className={styleBtn}>
          {children}
        </button>
      )}
    </>
  );
};
