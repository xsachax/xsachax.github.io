import ProjectCard from "./ProjectCard";
import { TypeAnimation } from "react-type-animation";
import styles from "./Projects.module.css";
import { t } from "../../i18n";
import "../../global.css";
import desk from "../../assets/images/desk_img.webp";
import vr_viz from "../../assets/thumbnails/vr-viz.webp";
import dot_deck from "../../assets/thumbnails/dot-deck.webp";
import hungry_ai from "../../assets/thumbnails/hungry-ai.webp";
import faang_slayer from "../../assets/thumbnails/faang-slayer.webp";
import hth_2023 from "../../assets/thumbnails/hth-2023.svg";
import hth_2024 from "../../assets/thumbnails/hth-2024.svg";
import read_me from "../../assets/thumbnails/read-me.webp";
import feather_fox from "../../assets/thumbnails/feather-fox.webp";
import fallback from "../../assets/thumbnails/default.webp";

function Projects() {
  const projects = t("projects.content");
  const thumbnails = {
    vr_viz: vr_viz,
    dot_deck: dot_deck,
    hungry_ai: hungry_ai,
    faang_slayer: faang_slayer,
    hth_2023: hth_2023,
    hth_2024: hth_2024,
    read_me: read_me,
    feather_fox: feather_fox,
  };

  const border_colors = {
    vr_viz: "var(--vr-viz-border)",
    dot_deck: "var(--dot-deck-border)",
    hungry_ai: "var(--hungry-ai-border)",
    faang_slayer: "var(--faang-slayer-border)",
    hth_2023: "var(--hth-2023-border)",
    hth_2024: "var(--hth-2024-border)",
    read_me: "var(--read-me-border)",
    feather_fox: "var(--feather-fox-border)",
  };

  return (
    <div className={styles["projects"]}>
      <div className={styles["projects-title"]}>
        <h1>
          {t("projects.title")}
          &nbsp;
          <TypeAnimation
            sequence={[
              ". . . 🛠️",
              2000,
              " . . . 🚧",
              2000,
              ". . . 🏆",
              2000,
              " . . . 🌅",
              2000,
              ". . . 🔮",
              2000,
              " . . . 💥",
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
      <p>{t("projects.subtitle")}</p>
      <div className={styles["projects-container"]}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={thumbnails[project.img] ? thumbnails[project.img] : fallback}
            title={project.title ? project.title : null}
            description={project.description ? project.description : null}
            github={project.github ? project.github : null}
            devpost={project.devpost ? project.devpost : null}
            website={project.website ? project.website : null}
            tags={project.tags ? project.tags : null}
            border_color={
              border_colors[project.img] ? border_colors[project.img] : null
            }
            show_border_passive={project.show_border_passive}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
