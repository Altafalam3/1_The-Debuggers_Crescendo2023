import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import HomePage from './components/homepage/HomePage'
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Result from "./components/results/Result";
function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>} />
         <Route path="/results" element={<Result/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
