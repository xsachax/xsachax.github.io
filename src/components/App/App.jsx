import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";
import Portfolio from "../Portfolio/Portfolio";
import "../../global.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
