import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import About from "../About/About";
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
