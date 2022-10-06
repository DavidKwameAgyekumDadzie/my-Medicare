
import './App.css';
// import { NavLink } from "react-router-dom";
// import Header from './components/header';
import Navbar from './components/NavBar';
// import RegistrationForm from './components/RegistrationForm'
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Form from "./components/Form"

import Home from "./pages/Home";
import WhyMyMedicare from "./pages/WhyMyMedicare";
import Blog from "./pages/Blog";
import FAQ from './pages/FAQ';
import HowItWorks from './pages/HowItWorks';
import Register from './pages/Register';
import Specialties from './pages/Specialties';
import Support from './pages/Support';
import Contacts from './pages/Contact';
import Dropdown from './components/Dropdown';
import Element from './components/Element';
import Login from './components/Login';



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* <Header /> */}
      {/* <RegistrationForm /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/why-my-medicare" element={<WhyMyMedicare />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/register" element={<Register />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/support" element={<Support />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dropdown" element={<Dropdown />} />
        <Route path="/element" element={<Element />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
