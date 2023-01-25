import Link from "next/link";
import styles from ".././Home.module.css";
import { MainLayout } from "../../components/layouts/MainLayout";

export default function HomePage() {
  return (
    <MainLayout>
      <div className={styles["main"]}>
        <h3> Page Pricing</h3>
        <h1>
          Ir a <Link href="/">Home</Link>
        </h1>
        <p>
          Get started by editing&nbsp;
          <code>pages/pricing/index.jsx</code>
        </p>
      </div>
    </MainLayout>
  );
}
