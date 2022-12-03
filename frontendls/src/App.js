import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prof from "./components/Proff/Prof"
import SingleVideo from "./components/Homepage/SingleVideo";
import SingleCourse from "./components/SingleCourse/SingleCourse";

function App() {
  return (
    <div className="App">
      {/*<h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>*/}
    {/*<Homepage/>*/}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
          <Route path="/allProffesionals" element={<Prof />} />
          <Route path="/singleVideo/:id" element={<SingleVideo />} />
          <Route path="/singleCourse" element={<SingleCourse/>} />
          
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
