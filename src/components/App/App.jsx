import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import WorkAndProjects from "../Work/WorkAndProjects";
import Footer from "../Footer/Footer";
import FourOFour from "../FourOFour/FourOFour";
import "../../global.css";
import styles from "./App.module.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2200);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              {isLoading && <Loading />}
              <NavBar />
              <div className={styles["wrapper"]}>
                <Hero />
              </div>
              <About />
              <WorkAndProjects />
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
