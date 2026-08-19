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

  useEffect(() => {
    if (fof) {
      return;
    }

    const nav = document.querySelector("nav");
    const scrollTop = document.getElementById("scroll_top");

    function updateNavbar() {
      const isAtTop = window.scrollY === 0;
      nav.style.backgroundColor = isAtTop ? "transparent" : "var(--navbar)";
      nav.style.backdropFilter = isAtTop ? "blur(0px)" : "blur(5px)";
      scrollTop.style.opacity = isAtTop ? "0" : "1";
      scrollTop.style.pointerEvents = isAtTop ? "none" : "all";
      scrollTop.style.cursor = isAtTop ? "default" : "pointer";
    }

    updateNavbar();
    window.addEventListener("scroll", updateNavbar, { passive: true });

    return () => window.removeEventListener("scroll", updateNavbar);
  }, [fof]);

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
