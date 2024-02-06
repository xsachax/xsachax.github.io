import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import "../../global.css";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <NavBar />
      <div className={styles["wrapper"]}>
        <Hero />
      </div>
      <About />
    </>
  );
}

export default App;
