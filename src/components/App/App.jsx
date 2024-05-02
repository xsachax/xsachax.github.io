import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import NavBar from "../NavBar/NavBar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import WorkAndProjects from "../Work/WorkAndProjects";
import Footer from "../Footer/Footer";
import PageNotFound from "../PageNotFound/PageNotFound";
import "../../global.css";
import styles from "./App.module.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
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
              <NavBar fof={false} />
              <div className={styles["hero-wrapper"]}>
                <Hero />
              </div>
              <div className={styles["main-wrapper"]}>
                <About />
                <WorkAndProjects />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="*"
          element={
            <>
              <NavBar fof={true} />
              <PageNotFound />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
