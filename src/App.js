import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./components/Contact/Contact";
import Videos from "./components/Videos/Videos";
import Photos from "./components/Photos/Photos";
import Footer from "./containers/Footer/Footer";
import PhotoShoot from "./components/PhotoShoot/PhotoShoot";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<PhotoShoot />} />
        <Route path="/" element={<Photos />} />
        <Route path="/natures" element={<Videos />} />
        <Route path="/log-in" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
