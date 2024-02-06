import { Suspense } from "react";
import styles from "./Hero.module.css";
import { t } from "../../i18n";
import "../../global.css";

function Hero() {
  return (
    <div className={styles["hero"]}>
      <div>
        <Suspense
          fallback={
            <div className={styles["suspense"]}>
              <p>Loading...</p>
            </div>
          }
        >
          <iframe
            id="frame1"
            name="frame1"
            alt="Desk Scene"
            title="Desk Scene"
            className={styles["spline"]}
            src="https://my.spline.design/untitled-34d9f889fb20377288d352814dd7c074/"
            frameBorder="0"
            width="100%"
            height="100%"
          ></iframe>
        </Suspense>
        <div className={styles["fade"]}></div>
        <div className={styles["button-mask"]}></div>
      </div>

      <div className={styles["hero-content"]}>
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.subtitle")}</p>
      </div>
    </div>
  );
}
export default Hero;
