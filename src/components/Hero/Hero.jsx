import React, { Suspense } from "react";
import styles from "./Hero.module.css";
import { t } from "../../i18n";
import "../../global.css";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

function Hero() {
  return (
    <div className={styles["hero"]}>
      <div className={styles["spline"]}>
        <Suspense
          fallback={
            <div className={styles["suspense"]}>
              <p>Loading...</p>
            </div>
          }
        >
          <Spline scene="https://prod.spline.design/syQodybaDtqMBV3k/scene.splinecode" />
        </Suspense>
        <div className={styles["fade"]}></div>
      </div>

      <div className={styles["hero-content"]}>
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.subtitle")}</p>
      </div>
    </div>
  );
}
export default Hero;
