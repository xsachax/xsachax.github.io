import { TypeAnimation } from "react-type-animation";
import styles from "./About.module.css";
import { t } from "../../i18n";
import "../../global.css";
import { motion } from "framer-motion";

function About() {
  return (
    <div className={styles["about"]}>
      <motion.div
        className={styles["about-title"]}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <h1>
          {t("about.title")}
          &nbsp;
          <TypeAnimation
            sequence={[
              ". . . 🖥️",
              2000,
              " . . . 🎨",
              2000,
              ". . . 🚀",
              2000,
              " . . . 🤠",
              2000,
              ". . . 🏔️",
              2000,
              " . . . 🏐",
              2000,
            ]}
            wrapper="span"
            speed={5}
            repeat={Infinity}
            className={styles["type-animation"]}
            style={{ color: "var(--shade-3)" }}
          />
        </h1>
      </motion.div>
      <div className={styles["about-container"]}>
        <div className={styles["about-content"]}>
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
