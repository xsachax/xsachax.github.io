import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar";
import "../../global.css";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <NavBar />
      <div className={styles["wrapper"]}>
        <Hero />
      </div>
    </>
  );
}

export default App;
