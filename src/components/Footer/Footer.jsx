import github_card_icon from "../../assets/icons/github_card_icon.svg";
import styles from "./Footer.module.css";
import "../../global.css";

function Footer() {
  return (
    <div>
      <nav className={styles["footer"]}>
        <div className={styles["footer-content"]}>
          <a
            href="https://github.com/xsachax/xsachax.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className={styles["github-link"]}
          >
            <div>Made with ❤️ by Sacha Arseneault</div>
            <img
              src={github_card_icon}
              alt="GitHub"
              width="25px"
              height="25px"
            />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
