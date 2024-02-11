import { locale } from "../../i18n";
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./NavBar.module.css";
import "../../global.css";

function NavBar() {
  const [language, setLanguage] = useState(true);

  return (
    <div>
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
                "https://drive.google.com/file/d/18XJrFuswgLxbeQ9nMIgGFZQyVKclqI9B/view?usp=sharing",
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
