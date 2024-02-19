import styles from "./Loading.module.css";
import "../../global.css";

function Loading() {
  return (
    <div className={styles["loading"]}>
      <div className={styles["progress-bar"]}></div>
    </div>
  );
}
export default Loading;
