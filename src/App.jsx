// import Imagenes from "./Imagenes";
import Curriculum from "./Curriculum";
import Inicio from "./Inicio";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        {/* <Route path="/cv" element={<Curriculum />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
