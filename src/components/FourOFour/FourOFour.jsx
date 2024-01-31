import styles from "./FourOFour.module.css";
import { t } from "../../i18n";
import "../../global.css";

function FourOFour() {
  return (
    <div className={styles["fourofour"]}>
      <div className={styles["fourofour-content"]}>
        <h1>{t("fourofour.title")}</h1>
        <p>{t("fourofour.p1")}</p>
      </div>
    </div>
  );
}
export default FourOFour;
