import linkedin_card_icon from "../../assets/icons/linkedin_card_icon.svg";
import github_card_icon from "../../assets/icons/github_card_icon.svg";
import devpost_card_icon from "../../assets/icons/devpost_card_icon.svg";
import mail_card_icon from "../../assets/icons/mail_card_icon.svg";
import Button from "../Button/Button";
import chevron from "../../assets/chevron.svg";
import styles from "./Footer.module.css";
import { t } from "../../i18n";
import "../../global.css";

function Footer() {
  window.onscroll = function () {
    if (window.scrollY === 0) {
      document.getElementById("scroll_top").style.opacity = "0";
      document.getElementById("scroll_top").style.pointerEvents = "none";
      document.getElementById("scroll_top").style.cursor = "default";
    } else {
      document.getElementById("scroll_top").style.opacity = "1";
      document.getElementById("scroll_top").style.pointerEvents = "all";
      document.getElementById("scroll_top").style.cursor = "pointer";
    }
  };

  return (
    <div>
      <nav className={styles["footer"]}>
        <div className={styles["footer-content"]}>
          <div>{t("footer.title")}</div>
          <div className={styles["footer-links"]}>
            <a
              href="https://www.linkedin.com/in/sacha-ars/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["link"]}
            >
              <img
                src={linkedin_card_icon}
                alt="LinkedIn"
                width="25px"
                height="25px"
              />
            </a>
            <a
              href="https://github.com/xsachax"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["link"]}
            >
              <img
                src={github_card_icon}
                alt="GitHub"
                width="25px"
                height="25px"
              />
            </a>
            <a
              href="https://devpost.com/xsachax"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["link"]}
            >
              <img
                src={devpost_card_icon}
                alt="Devpost"
                width="25px"
                height="25px"
              />
            </a>
            <a
              href="mailto:sacha.arseneault@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles["link"]}
            >
              <img
                src={mail_card_icon}
                alt="Email"
                width="25px"
                height="25px"
              />
            </a>
          </div>
          <div className={styles["scroll-top"]} id="scroll_top">
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img
                className={styles["scroll-top-icon"]}
                src={chevron}
                alt={t("footer.scroll")}
                width="14px"
                height="14px"
              />
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
