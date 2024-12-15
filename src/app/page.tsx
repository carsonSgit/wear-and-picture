
import styles from "./page.module.css";
import Hero from "@/components/hero";
import SiteItems from "@/components/siteItems";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <SiteItems />
      </main>
    </div>
  );
}
