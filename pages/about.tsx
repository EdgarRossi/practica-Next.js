import Link from "next/link";
import styles from "./Home.module.css";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { ReactElement } from "react";

export default function Abaut() {
  return (
    <div className={styles["main"]}>
      <h3> Page About</h3>
      <h1>
        Ir a <Link href="/">Home</Link>
      </h1>
      <p>
        Get started by editing&nbsp;
        <code>pages/abaut.jsx</code>
      </p>
    </div>
  );
}

Abaut.getLayout = function (page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
