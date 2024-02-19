import styles from "./Hero.module.css";
import { t } from "../../i18n";
import "../../global.css";
import { isMobile } from "react-device-detect";
import desk_img from "../../assets/images/desk_img.webp";

function Hero() {
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
            <div
              className={styles["spline"]}
              frameBorder="0"
              width="100%"
              height="100%"
            >
              <spline-viewer
                loading-anim-type="spinner-big-light"
                loading="lazy"
                url="https://prod.spline.design/syQodybaDtqMBV3k/scene.splinecode"
              ></spline-viewer>
            </div>
          </>
        )}
        <div className={styles["fade"]}></div>
        <div className={styles["button-mask"]}></div>
      </div>
    </div>
  );
}
export default Hero;
