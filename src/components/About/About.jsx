import { TypeAnimation } from "react-type-animation";
import styles from "./About.module.css";
import { t } from "../../i18n";
import "../../global.css";
import RevealDiv from "../../utils/RevealDiv";

function About() {
  return (
    <div className={styles["about"]}>
      <RevealDiv className={styles["about-title"]}>
        <h1>{t("about.title")}</h1>
      </RevealDiv>
      <div className={styles["about-container"]}>
        <div className={styles["about-content"]}>
          <RevealDiv>
            <p>{t("about.p1")}</p>
            <p>{t("about.p2")}</p>
            <p>{t("about.p3")}</p>
          </RevealDiv>
        </div>
        <RevealDiv>
          <div className={styles["earth-container"]}>
            <div className={styles["earth"]}></div>
          </div>
        </RevealDiv>
      </div>
    </div>
  );
}
export default About;
