import { locale } from "../../i18n";
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./NavBar.module.css";
import "../../global.css";

function NavBar() {
  const [language, setLanguage] = useState(true);

  window.onscroll = function () {
    if (window.scrollY === 0) {
      document.querySelector("nav").style.backgroundColor = "transparent";
      document.querySelector("nav").style.backdropFilter = "blur(0px)";
    } else {
      document.querySelector("nav").style.backgroundColor = "var(--navbar)";
      document.querySelector("nav").style.backdropFilter = "blur(5px)";
    }
  };

  return (
    <div className={styles["navbar-container"]}>
      <nav className={styles["navbar"]}>
        <div className={styles["left-side-buttons"]}>
          <div>Sacha Arseneault</div>
        </div>
        <div className={styles["right-side-buttons"]}>
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
  );
}

export default NavBar;
