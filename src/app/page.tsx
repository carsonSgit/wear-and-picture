import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <Hero />
      </main>
    </div>
  );
}
