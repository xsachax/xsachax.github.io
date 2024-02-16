import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";
import FourOFour from "../FourOFour/FourOFour";
import "../../global.css";
import styles from "./App.module.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <NavBar />
              <div className={styles["wrapper"]}>
                <Hero />
              </div>
              <About />
              <Projects />
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <NavBar />
              <FourOFour />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
