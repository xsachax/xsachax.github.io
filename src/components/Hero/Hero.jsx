import styles from "./Hero.module.css";
import { t } from "../../i18n";
import "../../global.css";
import { isMobile } from "react-device-detect";
import SocialButton from "../SocialButton/SocialButton";
import desk_img from "../../assets/images/desk_img.webp";
import linkedin_icon from "/src/assets/icons/linkedin_icon.svg";
import github_icon from "/src/assets/icons/github_icon.svg";
import devpost_icon from "/src/assets/icons/devpost_icon.svg";
import email_icon from "/src/assets/icons/email-icon.svg";

function Hero() {
  return (
    <div className={styles["hero"]}>
      <div className={styles["hero-content"]}>
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.subtitle")}</p>
      </div>
      <div className={styles["spline-container"]}>
        {isMobile ? (
          <div className={styles["mobile-spline"]}>
            <img
              src={desk_img}
              alt="Static Desk View"
              width="100%"
              height="100%"
            />
          </div>
        ) : (
          <>
            <div
              className={styles["spline"]}
              frameBorder="0"
              width="100%"
              height="100%"
            >
              <spline-viewer
                loading-anim-type="spinner-big-light"
                loading="lazy"
                url="https://prod.spline.design/syQodybaDtqMBV3k/scene.splinecode"
              ></spline-viewer>
            </div>
          </>
        )}
        <div className={styles["fade"]}></div>
        <div className={styles["button-mask"]}></div>
      </div>
      {isMobile ? (
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
      ) : (
        <></>
      )}
    </div>
  );
}
export default Hero;
