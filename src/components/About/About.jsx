import styles from "./About.module.css";
import { t } from "../../i18n";
import "../../global.css";

function About() {
  return (
    <div className={styles["about"]}>
      <div className={styles["about-container"]}>
        <div className={styles["about-content"]}>
          <h1>{t("about.title")}</h1>
          <p>{t("about.p1")}</p>
          <p>{t("about.p2")}</p>
          <p>{t("about.p3")}</p>
        </div>
        <div className={styles["earth-container"]}>
          <div className={styles["earth"]}></div>
        </div>
      </div>
    </div>
  );
}
export default About;
