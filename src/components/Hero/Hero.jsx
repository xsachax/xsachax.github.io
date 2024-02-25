import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import { t } from "../../i18n";
import "../../global.css";
import waving_hand from "../../assets/icons/waving-hand.svg";
import logo from "../../assets/meta/favicon.svg";
import chevron from "../../assets/chevron.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import RevealDiv from "../../utils/RevealDiv";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles["hero"]}>
      <div
        className={styles["hero-content"]}
        data-aos="fade-down"
        data-aos-duration="900"
        data-aos-delay="1000"
      >
        <RevealDiv delay={1}>
          <h1>
            <span className={styles["name-prefix"]}>{t("hero.title")}</span>
            &nbsp;
            <span className={styles["name"]}>
              <span
                className={styles["letter"]}
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-delay="1000"
              >
                S
              </span>
              <span
                className={styles["letter"]}
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-delay="1050"
              >
                a
              </span>
              <span
                className={styles["letter"]}
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-delay="1100"
              >
                c
              </span>
              <span
                className={styles["letter"]}
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-delay="1150"
              >
                h
              </span>
              <span
                className={styles["letter"]}
                data-aos="fade-down"
                data-aos-duration="900"
                data-aos-delay="1200"
              >
                a
              </span>
            </span>
            <span className={styles["wave"]}>
              <img
                src={waving_hand}
                alt={t("hero.wave_alt")}
                width="100px"
                height="100px"
              />
            </span>
          </h1>
        </RevealDiv>
        <RevealDiv delay={1.2}>
          <h2>{t("hero.subtitle")}</h2>
        </RevealDiv>
        <div className={styles["hero-img"]}>
          <img src={logo} alt="Logo" width="600px" height="600px" />
        </div>
        <div className={styles["hero-img2"]}>
          <img src={logo} alt="Logo" width="500px" height="500px" />
        </div>
      </div>

      <div className={styles["scroll-down"]}>
        <p>{t("hero.scroll")}</p>
        <img src={chevron} alt={t("hero.scroll")} width="14px" height="14px" />
        <img src={chevron} alt={t("hero.scroll")} width="14px" height="14px" />
      </div>
    </div>
  );
}
export default Hero;
