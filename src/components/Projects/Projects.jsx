import ProjectCard from "./ProjectCard";
import { TypeAnimation } from "react-type-animation";
import styles from "./Projects.module.css";
import { t } from "../../i18n";
import "../../global.css";
import vr_viz from "../../assets/thumbnails/vr-viz.svg";
import dot_deck from "../../assets/thumbnails/dot-deck.svg";
import hungry_ai from "../../assets/thumbnails/hungry-ai.svg";
import faang_slayer from "../../assets/thumbnails/faang-slayer.svg";
import kelpie from "../../assets/thumbnails/kelpie.svg";
import hth_2023 from "../../assets/thumbnails/hth-2023.svg";
import hth_2024 from "../../assets/thumbnails/hth-2024.svg";
import read_me from "../../assets/thumbnails/read-me.webp";
import feather_fox from "../../assets/thumbnails/feather-fox.webp";
import fallback from "../../assets/thumbnails/default.webp";
import RevealDiv from "../../utils/RevealDiv";

function Projects() {
  const projects = t("projects.content");
  const thumbnails = {
    vr_viz: vr_viz,
    dot_deck: dot_deck,
    hungry_ai: hungry_ai,
    faang_slayer: faang_slayer,
    kelpie: kelpie,
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
    kelpie: "var(--kelpie-border)",
    hth_2023: "var(--hth-2023-border)",
    hth_2024: "var(--hth-2024-border)",
    read_me: "var(--read-me-border)",
    feather_fox: "var(--feather-fox-border)",
  };

  return (
    <div className={styles["projects"]}>
      <RevealDiv className={styles["projects-title"]}>
        <h1>{t("projects.title")}</h1>
      </RevealDiv>
      <RevealDiv>
        <p>{t("projects.subtitle")}</p>
      </RevealDiv>

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
