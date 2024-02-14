import ProjectCard from "./ProjectCard";
import { TypeAnimation } from "react-type-animation";
import styles from "./Projects.module.css";
import { t } from "../../i18n";
import "../../global.css";
import desk from "../../assets/images/desk_img.webp";

function Projects() {
  const projects = t("projects.content");
  const thumbnails = [];

  return (
    <div className={styles["projects"]}>
      <h1>
        {t("projects.title")}
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
      <p>{t("projects.subtitle")}</p>
      <div className={styles["projects-container"]}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={desk}
            title={project.title ? project.title : null}
            description={project.description ? project.description : null}
            github={project.github ? project.github : null}
            devpost={project.devpost ? project.devpost : null}
            website={project.website ? project.website : null}
            tags={project.tags ? project.tags : null}
          />
        ))}
      </div>
    </div>
  );
}
export default Projects;
