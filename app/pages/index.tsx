import { HomeAbout, HomeContact, HomeProjects } from "@/components/organisms";
import styles from "../styles/Container.module.css";

export default function Home() {
  return (
    <main className={`min-h-screen ${styles.Container}`}>
      <HomeAbout />
      <HomeProjects />
      <HomeContact />
    </main>
  );
}
