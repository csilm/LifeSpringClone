import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prof from "./components/Proff/Prof"
import SingleVideo from "./components/Homepage/SingleVideo";
import SingleCourse from "./components/SingleCourse/SingleCourse";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup/Signup";
import ListOfOurServices from "./components/ServicesPages/ListOfOurServices";
import PsychologicalCounseling from "./components/ServicesPages/PsychologicalCounseling";
import CorporateService from "./components/ServicesPages/CorporateService";
import ChildDevelopement from "./components/ServicesPages/ChildDevelopement";
import MentalHealthTest from "./components/ServicesPages/MentalHealthTest";
import Psychiatrist from "./components/Prof_Sub/Psychiatrist";
import ClientsFBFull from "./components/Testomonials/ClientsFBFull";
import ClientsReview from "./components/Testomonials/ClientsReview";
import Psychologist from "./components/Prof_Sub/Psychologist";
import Counselor from "./components/Prof_Sub/Conselor";
import Child from "./components/Prof_Sub/Child";
import Dermatologist from "./components/Prof_Sub/Dermatologist";
import ENT from "./components/Prof_Sub/ENT";
import Sexual from "./components/Prof_Sub/Sexual";
import Gynecologists from "./components/Prof_Sub/Gynecologists";
import Internal from "./components/Prof_Sub/Internal";
import Therapist from "./components/Prof_Sub/Therapist";
import Nutritionist from "./components/Prof_Sub/Nutritionist";
import Paediatrics from "./components/Prof_Sub/Paediatrics";
import Courses from "./components/Courses/Courses";
import DashboardHome from "./components/Dashboard/DashboardHome";
import ActivePage from "./components/Dashboard/ActivePage";
import Blogs from './components/Blogs/Blogs'
import BlogDetails from './components/Blogs/DetailsPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/allProffesionals" element={<Prof />} />
          <Route path="/singleVideo/:id" element={<SingleVideo />} />
          <Route path="/singleCourse" element={<SingleCourse/>} />
          <Route path="/psychiatrist" element={<Psychiatrist />} />
          <Route path="/psychologist" element={<Psychologist />} />
          <Route path="/counselor" element={<Counselor />} />
          <Route path="/child" element={<Child />} />
          <Route path="/dermatologist" element={<Dermatologist />} />
          <Route path="/sexual-health" element={<Sexual />} />
          <Route path="/gynechologist" element={<Gynecologists />} />
          <Route path="/internal-med" element={<Internal />} />
          <Route path="/therapist" element={<Therapist />} />
          <Route path="/ent" element={<ENT />} />
          <Route path="/nutritionist" element={<Nutritionist />} />
          <Route path="/paediatrics" element={<Paediatrics />} />

          <Route path="/listOfServices" element={<ListOfOurServices />} />
          <Route
            path="/psychologicalCounseling"
            element={<PsychologicalCounseling />}
          />
          <Route path="/corporateService" element={<CorporateService />} />
          <Route path="/childDevelopment" element={<ChildDevelopement />} />
          <Route path="/mentalHealthTest" element={<MentalHealthTest />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blogDetails" element={<BlogDetails />} />

          <Route path="/clientsFeedback" element={<ClientsFBFull />} />
          <Route path="/clientsReview" element={<ClientsReview />} />
          
          <Route path="/dashboard" element={<DashboardHome />}>
            <Route index element={<ActivePage />} />
            <Route path="/dashboardActive" element={<ActivePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
