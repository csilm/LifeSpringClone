import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup/Signup";

import Prof from "./components/Proff/Prof"
import ListOfOurServices from "./components/ServicesPages/ListOfOurServices";
import PsychologicalCounseling from "./components/ServicesPages/PsychologicalCounseling";
import CorporateService from "./components/ServicesPages/CorporateService";
import ChildDevelopement from "./components/ServicesPages/ChildDevelopement";
import MentalHealthTest from "./components/ServicesPages/MentalHealthTest";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path = "/allProffesionals" element = {<Prof/>}/>
        <Route path = "/listOfServices" element = {<ListOfOurServices/>}/>
        <Route path = "/psychologicalCounseling" element = {<PsychologicalCounseling/>}/>
        <Route path = "/corporateService" element = {<CorporateService/>}/>
        <Route path = "/childDevelopment" element = {<ChildDevelopement/>}/>
        <Route path = "/mentalHealthTest" element = {<MentalHealthTest/>}/>

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
