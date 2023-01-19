import Link from "next/link";
import styles from "./Home.module.css";
import { MainLayout } from "../components/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className={styles["main"]}>
        <h3> Page Home</h3>
        <h1>
          Ir a <Link href="/about">About</Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code>pages/index.jsx</code>
        </p>
      </div>
    </MainLayout>
  );
}
