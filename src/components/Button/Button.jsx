import styles from "./Button.module.css";

function Button({ children, onClick }) {
  return (
    <button className={styles["square-button"]} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
