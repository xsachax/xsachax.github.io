import Work from "./Work";
import Projects from "../Projects/Projects";
import styles from "./WorkAndProjects.module.css";
import "../../global.css";

function WorkAndProjects() {
  return (
    <div className={styles["work-and-projects"]}>
      <Work />
      <Projects />
    </div>
  );
}
export default WorkAndProjects;
