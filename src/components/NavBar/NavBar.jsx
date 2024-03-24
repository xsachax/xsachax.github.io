import { locale, t } from "../../i18n";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import chevron from "../../assets/chevron.svg";
import styles from "./NavBar.module.css";
import "../../global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "/src/assets/favicon.svg";

function NavBar({ fof }) {
  const [language, setLanguage] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  window.onscroll = function () {
    if (window.scrollY === 0) {
      document.querySelector("nav").style.backgroundColor = "transparent";
      document.querySelector("nav").style.backdropFilter = "blur(0px)";
      document.getElementById("scroll_top").style.opacity = "0";
      document.getElementById("scroll_top").style.pointerEvents = "none";
      document.getElementById("scroll_top").style.cursor = "default";
    } else {
      document.querySelector("nav").style.backgroundColor = "var(--navbar)";
      document.querySelector("nav").style.backdropFilter = "blur(5px)";
      document.getElementById("scroll_top").style.opacity = "1";
      document.getElementById("scroll_top").style.pointerEvents = "all";
      document.getElementById("scroll_top").style.cursor = "pointer";
    }
  };

  return (
    <>
      <div className={styles["navbar-container"]}>
        <nav className={styles["navbar"]}>
          <div
            className={styles["left-side-buttons"]}
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            <img
              onClick={() => {
                fof
                  ? window.open("https://sachaa.dev", "_self")
                  : window.scrollY === 0
                  ? window.location.reload()
                  : window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={styles["navbar-logo"]}
              src={logo}
              alt="Logo"
              width="40px"
              height="40px"
            />

            <div
              onClick={() => {
                fof && window.open("https://sachaa.dev", "_self");
              }}
              style={{
                cursor: fof ? "pointer" : "default",
              }}
            >
              Sacha Arseneault
            </div>
          </div>
          <div
            className={styles["right-side-buttons"]}
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-delay="500"
          >
            <Button
              className={`${styles["language-selector"]}`}
              onClick={() => {
                setLanguage(!language);
                locale.set(language ? "fr" : "en");
              }}
            >
              {language ? "fr" : "en"}
            </Button>
            <Button
              className={`${styles["language-selector"]}`}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1Fu5jCkgOxn9AbSwP0CqqcvE69U4PdAbk/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              {"resume"}
            </Button>
          </div>
        </nav>
      </div>
      {!fof && (
        <div className={styles["scroll-top"]} id="scroll_top">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              className={styles["scroll-top-icon"]}
              src={chevron}
              alt={t("hero.scroll")}
              width="14px"
              height="14px"
            />
          </Button>
        </div>
      )}
    </>
  );
}

export default NavBar;
