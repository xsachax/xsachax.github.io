import React from "react";
import styles from "./SocialButton.module.css";
import { t } from "../../i18n";

function SocialButton({ icon, link, title, color, alt }) {
  return (
    <a href={link} target="_blank" style={{}}>
      <div className={styles["social-button-content"]}>
        <img src={icon} alt={alt} />
        <p>{title}</p>
      </div>
    </a>
  );
}
export default SocialButton;
