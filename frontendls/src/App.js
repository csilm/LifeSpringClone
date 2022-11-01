import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Prof from "./components/Proff/Prof"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path = "/allProffesionals" element = {<Prof/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
