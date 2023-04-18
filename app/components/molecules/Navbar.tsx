import navbar from "@/styles/Navbar.module.css";
import { goToSection } from "@/utils";

const menuList = [
  {
    label: "Inicio",
    url: "/",
  },
  {
    label: "Proyectos",
    url: "/projects",
  },
  {
    label: "Contacto",
    url: "/contact",
  },
];

interface NavbarProps {
  isMenuActive: boolean;
  setActiveMenu: () => void;
}

export const Navbar = ({ isMenuActive, setActiveMenu }: NavbarProps) => {
  const handleGoToSection = (url: string) => {
    goToSection(url);
    setActiveMenu();
  };
  return (
    <nav className={`${navbar.Navbar} ${isMenuActive && navbar.Navbar_active}`}>
      {menuList.map(({ label, url }) => (
        <li
          key={label}
          className="font-medium text-lg laptop:text-xl cursor-pointer"
          onClick={() => handleGoToSection(url)}
        >
          {label}
        </li>
      ))}
    </nav>
  );
};
