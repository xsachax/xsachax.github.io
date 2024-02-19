import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { t } from "../../i18n";
import "../../global.css";
import { isMobile } from "react-device-detect";
import desk_img from "../../assets/images/desk_img.webp";
import AOS from "aos";
import "aos/dist/aos.css";

function Hero() {
  const [canLoad, setCanLoad] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles["hero"]}>
      <div
        className={styles["hero-content"]}
        data-aos="fade-down"
        data-aos-duration="700"
        data-aos-delay="2200"
      >
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.subtitle")}</p>
      </div>
      <div className={styles["spline-container"]}>
        {(isMobile || canLoad == false) && (
          <div className={styles["mobile-spline"]}>
            <img
              src={desk_img}
              alt="Static Desk View"
              width="100%"
              height="100%"
            />
          </div>
        )}
        {isMobile == false && (
          <div
            className={styles["spline"]}
            style={{ display: canLoad && isMobile == false ? "block" : "none" }}
            frameBorder="0"
            width="100%"
            height="100%"
          >
            <iframe
              src="https://my.spline.design/untitled-34d9f889fb20377288d352814dd7c074/"
              onLoad={() => {
                setCanLoad(true);
              }}
              loading="eager"
              frameBorder="0"
              width="100%"
              height="100%"
            ></iframe>
          </div>
        )}
        <div className={styles["fade"]}></div>
        <div className={styles["button-mask"]}></div>
      </div>
    </div>
  );
}
export default Hero;
