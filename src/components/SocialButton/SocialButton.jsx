import styles from "./SocialButton.module.css";

function SocialButton(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer" style={{}}>
      <div className={styles["social-button-content"]}>
        <img src={props.icon} alt={props.alt} />
        <p>{props.title}</p>
      </div>
    </a>
  );
}
export default SocialButton;
