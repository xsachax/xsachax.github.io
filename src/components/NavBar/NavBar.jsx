import { locale } from "../../i18n";
import { useState } from "react";
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
          <button
            className={`${styles["square-button"]} ${styles["language-selector"]}`}
            type="submit"
            onClick={() => {
              setLanguage(!language);
              locale.set(language ? "fr" : "en");
            }}
          >
            {language ? "fr" : "en"}
          </button>
          <button
            className={`${styles["square-button"]}`}
            type="submit"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1-A37jRCkA04KeTQweJ2L8MNmKxnlIDuH/view?usp=sharing",
                "_blank"
              )
            }
          >
            {"resume"}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
