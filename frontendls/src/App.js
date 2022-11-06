import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import HPContent from './components/Homepage/HPContent';
import OurClients from "./components/Homepage/OurClients"
import HealthServices from "./components/Homepage/HealthServices";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup/Signup";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HPContent />}/>
        <Route path="/clients" element={<OurClients />}/>
        <Route path="/services" element={<HealthServices/>}/>
        <Route path="/footer" element={<Footer />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
