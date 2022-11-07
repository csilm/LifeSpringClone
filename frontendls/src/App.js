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
import Psychiatrist from "./components/Prof_Sub/Psychiatrist"
import ClientsFBFull from "./components/Testomonials/ClientsFBFull";
import ClientsReview from "./components/Testomonials/ClientsReview";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<Homepage/>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        
        <Route path = "/allProffesionals" element = {<Prof/>}/>
        <Route path = "/psychiatrist" element = {<Psychiatrist/>}/>


        <Route path = "/listOfServices" element = {<ListOfOurServices/>}/>
        <Route path = "/psychologicalCounseling" element = {<PsychologicalCounseling/>}/>
        <Route path = "/corporateService" element = {<CorporateService/>}/>
        <Route path = "/childDevelopment" element = {<ChildDevelopement/>}/>
        <Route path = "/mentalHealthTest" element = {<MentalHealthTest/>}/>

        <Route path = "/clientsFeedback" element = {<ClientsFBFull/>}/>
        <Route path = "/clientsReview" element = {<ClientsReview/>}/>


      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
