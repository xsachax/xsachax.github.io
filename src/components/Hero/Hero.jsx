import styles from "./Hero.module.css";
import { t } from "../../i18n";
import linkedin_icon from "/src/assets/icons/linkedin_icon.svg";
import github_icon from "/src/assets/icons/github_icon.svg";
import devpost_icon from "/src/assets/icons/devpost_icon.svg";
import email_icon from "/src/assets/icons/email-icon.svg";
import stadium from "/src/assets/images/stadium.webp";
import SocialButton from "../SocialButton/SocialButton";
import "../../global.css";

function Hero() {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero-image"]}>
        <img src={stadium} alt={t("hero.img_alt")} />
      </div>
      <div className={styles["hero-content"]}>
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.p1")}</p>
        <p>{t("hero.p2")}</p>
        <p>{t("hero.p3")}</p>
      </div>
      <div className={styles["hero-socials"]}>
        <SocialButton
          icon={linkedin_icon}
          link="https://www.linkedin.com/in/sacha-ars/"
          title="LinkedIn"
          color="#0077B5"
          alt={t("hero.linkedin_alt")}
        />
        <SocialButton
          icon={github_icon}
          link="https://github.com/xsachax"
          title="GitHub"
          color="#181717"
          alt={t("hero.github_alt")}
        />
        <SocialButton
          icon={devpost_icon}
          link="https://devpost.com/xsachax"
          title="Devpost"
          color="#000000"
          alt={t("hero.devpost_alt")}
        />
        <SocialButton
          icon={email_icon}
          link="mailto:sacha.arseneault@gmail.com"
          title="Email"
          color="#EA4335"
          alt={t("hero.email_alt")}
        />
      </div>
    </div>
  );
}
export default Hero;
