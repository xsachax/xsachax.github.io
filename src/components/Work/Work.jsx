import ProjectCard from "../Projects/ProjectCard";
import { TypeAnimation } from "react-type-animation";
import styles from "./Work.module.css";
import { t } from "../../i18n";
import "../../global.css";
import ciena from "../../assets/thumbnails/ciena.svg";
import propel from "../../assets/thumbnails/propel.svg";
import synchroteam from "../../assets/thumbnails/synchroteam.svg";

import fallback from "../../assets/thumbnails/default.webp";

function Work() {
  const work = t("work.content");
  const thumbnails = {
    ciena: ciena,
    propel: propel,
    synchroteam: synchroteam,
  };

  const border_colors = {
    ciena: "var(--ciena-border)",
    propel: "var(--propel-border)",
    synchroteam: "var(--synchroteam-border)",
  };

  return (
    <div className={styles["work"]}>
      <div className={styles["work-title"]}>
        <h1>
          {t("work.title")}
          &nbsp;
          <TypeAnimation
            sequence={[
              ". . . 💼",
              2000,
              " . . . 📊",
              2000,
              ". . . 📂",
              2000,
              " . . . 📎",
              2000,
              ". . . 📈",
              2000,
              " . . . 📆",
              2000,
            ]}
            wrapper="span"
            speed={5}
            repeat={Infinity}
            className={styles["type-animation"]}
            style={{ color: "var(--shade-3)" }}
          />
        </h1>
      </div>
      <p>{t("work.subtitle")}</p>
      <div className={styles["work-container"]}>
        {work.map((company, index) => (
          <ProjectCard
            key={index}
            image={thumbnails[company.img] ? thumbnails[company.img] : fallback}
            title={company.title ? company.title : null}
            description={company.description ? company.description : null}
            github={company.github ? company.github : null}
            devpost={company.devpost ? company.devpost : null}
            website={company.website ? company.website : null}
            tags={company.tags ? company.tags : null}
            border_color={
              border_colors[company.img] ? border_colors[company.img] : null
            }
            show_border_passive={company.show_border_passive}
          />
        ))}
      </div>
    </div>
  );
}
export default Work;
