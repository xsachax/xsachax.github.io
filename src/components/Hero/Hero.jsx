import { useState } from "react";
import styles from "./Hero.module.css";
import { t } from "../../i18n";
import "../../global.css";
import { isMobile } from "react-device-detect";
import desk_img from "../../assets/images/desk_img.webp";

function Hero() {
  const [frameLoaded, setFrameLoaded] = useState(false);

  return (
    <div className={styles["hero"]}>
      <div className={styles["hero-content"]}>
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.subtitle")}</p>
      </div>
      <div className={styles["spline-container"]}>
        {isMobile ? (
          <div className={styles["mobile-spline"]}>
            <img
              src={desk_img}
              alt="Static Desk View"
              width="100%"
              height="100%"
            />
          </div>
        ) : (
          <>
            {frameLoaded ? (
              <></>
            ) : (
              <div className={styles["loader-container"]}></div>
            )}
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
              onLoad={() => setFrameLoaded(true)}
            ></iframe>
          </>
        )}
        <div className={styles["fade"]}></div>
        <div className={styles["button-mask"]}></div>
      </div>
    </div>
  );
}
export default Hero;
