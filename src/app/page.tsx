import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <h1>Welcome to Next.js!</h1>
        <p>Get started by editing <code>src/app/page.tsx</code>.</p>
      </main>
    </div>
  );
}
