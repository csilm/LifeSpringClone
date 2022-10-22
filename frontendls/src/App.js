import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import HPContent from './components/Homepage/HPContent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HPContent />}/>
        <Route path="/footer" element={<Footer />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
