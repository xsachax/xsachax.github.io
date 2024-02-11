import styles from "./FourOFour.module.css";
import { t } from "../../i18n";
import Button from "../Button/Button";
import "../../global.css";

function FourOFour() {
  return (
    <div className={styles["fourofour"]}>
      <div className={styles["fourofour-content"]}>
        <h1>{t("fourofour.title")}</h1>
        <p>{t("fourofour.p1")}</p>
        <Button onClick={() => window.open("https://sachaa.dev", "_self")}>
          {t("fourofour.button_text")}
        </Button>
      </div>
    </div>
  );
}
export default FourOFour;
