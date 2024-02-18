import { useState } from "react";
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
  border_color,
  show_border_passive,
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
    Pandas: "var(--pandas)",
    AI: "var(--ai)",
    C: "var(--c)",
    Jenkins: "var(--jenkins)",
    Blender: "var(--blender)",
    Flutter: "var(--flutter)",
    Dart: "var(--dart)",
  };

  const tagLinks = {
    React: "https://reactjs.org/",
    Astro: "https://astro.build/",
    CSS: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    Javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    Python: "https://www.python.org/",
    Unity: "https://unity.com/",
    "C#": "https://docs.microsoft.com/en-us/dotnet/csharp/",
    VR: "https://developer.oculus.com/",
    Plotly: "https://plotly.com/",
    Tensorflow: "https://www.tensorflow.org/",
    OpenCV: "https://opencv.org/",
    Firebase: "https://firebase.google.com/",
    Pandas: "https://pandas.pydata.org/",
    AI: "https://openai.com/",
    C: "https://en.cppreference.com/w/c/language",
    Jenkins: "https://www.jenkins.io/",
    Blender: "https://www.blender.org/",
    Flutter: "https://flutter.dev/",
    Dart: "https://dart.dev/",
  };

  const [showContent, setShowContent] = useState(false);

  return (
    <div
      className={styles["project-card-container"]}
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      <div
        className={styles["project-card"]}
        id="project-card"
        style={{
          backgroundImage: `url(${image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: showContent ? "95%" : "100%",
          border:
            (border_color && showContent) || show_border_passive
              ? `1px solid ${border_color}`
              : "1px solid transparent",
        }}
      >
        {showContent && (
          <div className={styles["project-card-content"]}>
            <div className={styles["project-card-text"]}>
              <h5 className={styles["project-card-text-title"]}>{title}</h5>
              <h5 className={styles["project-card-text-description"]}>
                {description}
              </h5>
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
                  <button
                    key={index}
                    onClick={() => window.open(tagLinks[tag], "_blank")}
                    className={styles["project-tag"]}
                    style={{
                      color: tagColors[tag],
                      borderColor: tagColors[tag],
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default ProjectCard;
