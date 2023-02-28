import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./pages/Error/ErrorPage";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import SingleProduct from "./pages/Logement/Logement";
import "./style/main.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/kasa2/" element={<Home />} />
        <Route exact path="/a-propos" element={<About />} />
        <Route exact path="/logements/:id" element={<SingleProduct />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
