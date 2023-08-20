import "./App.css";
import GlobalStyles from "./components/Globalstyles";
import DefaultLayout from "./components/layouts/Defaultlayout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";

function App() {
  return (
    <GlobalStyles>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </Router>
    </GlobalStyles>
  );
}

export default App;
