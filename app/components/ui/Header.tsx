import Link from "next/link";

import styles from "../../styles/Container.module.css";

export const Header = () => {
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

  return (
    <header
      className={`${styles.Container} flex items-center justify-between py-8`}
    >
      <div>logo</div>
      <nav className="flex items-center gap-6">
        {menuList.map(({ label, url }) => (
          <Link
            key={label}
            href={url}
            className="uppercase font-semibold text-lg"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};
