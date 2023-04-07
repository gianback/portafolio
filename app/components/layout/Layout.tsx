import { Barlow } from "next/font/google";
import { FC, PropsWithChildren } from "react";

//ui
import { Footer, Header } from "../ui";

//styles
import styles from "../../styles/Layout.module.css";
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-barlow",
});

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={`${barlow.className} ${styles.Background} `}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
