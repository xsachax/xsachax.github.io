import github_card_icon from "../../assets/icons/github_card_icon.svg";
import devpost_card_icon from "../../assets/icons/devpost_card_icon.svg";
import website_card_icon from "../../assets/icons/website_card_icon.svg";
import styles from "./ProjectCard.module.css";
import "../../global.css";

function ProjectCard({
  image,
  title,
  description,
  github,
  devpost,
  website,
  tags,
}) {
  const tagColors = {
    React: "var(--react)",
    Astro: "var(--astro)",
    CSS: "var(--css)",
    Javascript: "var(--javascript)",
    Python: "var(--python)",
    Unity: "var(--unity)",
    "C#": "var(--c-sharp)",
    VR: "var(--vr)",
    Plotly: "var(--plotly)",
    Tensorflow: "var(--tensorflow)",
    OpenCV: "var(--opencv)",
    Firebase: "var(--firebase)",
  };

  return (
    <div
      className={styles["project-card"]}
      style={{
        backgroundImage: `url(${image})`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles["project-card-content"]}>
        <div className={styles["project-card-text"]}>
          <h5>{title}</h5>
          <h6>{description}</h6>
        </div>
        <div className={styles["project-extra"]}>
          <div className={styles["project-links"]}>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["project-link"]}
              >
                <img
                  src={github_card_icon}
                  alt="GitHub"
                  width="25px"
                  height="25px"
                />
              </a>
            )}
            {devpost && (
              <a
                href={devpost}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["project-link"]}
              >
                <img
                  src={devpost_card_icon}
                  alt="Devpost"
                  width="25px"
                  height="25px"
                />
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className={styles["project-link"]}
              >
                <img
                  src={website_card_icon}
                  alt="Website"
                  width="25px"
                  height="25px"
                />
              </a>
            )}
          </div>
          <div className={styles["project-tags"]}>
            {tags.map((tag, index) => (
              <div
                key={index}
                className={styles["project-tag"]}
                style={{ color: tagColors[tag], borderColor: tagColors[tag] }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectCard;
