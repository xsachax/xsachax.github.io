import { useEffect } from "react";
import styles from "./PageNotFound.module.css";
import { t } from "../../i18n";
import Button from "../Button/Button";
import "../../global.css";
import AOS from "aos";
import "aos/dist/aos.css";

function PageNotFound() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles["fourofour"]}>
      <div
        className={styles["fourofour-content"]}
        data-aos="fade-up"
        data-aos-duration="700"
      >
        <h1>{t("fourofour.title")}</h1>
        <p>{t("fourofour.p1")}</p>
        <Button onClick={() => window.open("https://sachaa.dev", "_self")}>
          {t("fourofour.button_text")}
        </Button>
      </div>
    </div>
  );
}
export default PageNotFound;
