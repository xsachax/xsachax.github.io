import styles from "./Button.module.css";

function Button({ children, onClick }) {
  return (
    <button className={styles["square-button"]} onClick={onClick}>
      <div className={styles["square-button-content"]}>{children}</div>
    </button>
  );
}
export default Button;
