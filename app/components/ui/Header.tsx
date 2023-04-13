import Image from "next/image";
import { useState } from "react";

import { MenuIcon } from "../atoms";
import { Navbar } from "../molecules";

import header from "@/styles/Header.module.css";
import logo from "@/public/logo.webp";

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleActiveMenu = () => {
    setIsMenuActive(!isMenuActive);
    document.querySelector("body")?.classList.toggle("no-scroll");
  };

  const handleActiveMenuFromNabvar = () => {
    setIsMenuActive(false);
    document.querySelector("body")?.classList.remove("no-scroll");
  };

  return (
    <header className={`${header.Header}`}>
      <div className={`${header.Container}`}>
        <picture className={`${header.Logo}`}>
          <Image
            src={logo.src}
            width={100}
            height={50}
            alt="Gian Franco Peralta"
          />
        </picture>

        <MenuIcon
          setIsActive={handleActiveMenu}
          isActive={isMenuActive}
          type="hamburguer"
        />
        <Navbar
          isMenuActive={isMenuActive}
          setActiveMenu={handleActiveMenuFromNabvar}
        />
        <div
          className={`${header.Overlay} ${
            isMenuActive && header.Overlay_active
          }`}
          onClick={handleActiveMenu}
        />
      </div>
    </header>
  );
};
