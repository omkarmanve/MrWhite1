import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Addto from "./components/Addto";
import Home from "./pages/Home/Home";
import About from "./pages/About/about";
import SubscriptionPage from "./pages/Subscription/Subscrption";
import Contact from "./pages/Contact/Contact";
import LLhubPage from "./extra/LLhub";
import Product from "./Product/Product"; 
import LoginPage from "./pages/Login/Login";
import SignupPage from "./pages/Login/SignupPage";

const AppWrapper = () => {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  // Hide Navbar/Footer ONLY on signup page
  const noNavFooter = path === "/signup";

  return (
    <>
      {!noNavFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscrption" element={<SubscriptionPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/llhub" element={<LLhubPage />} />
        <Route path="/product" element={<Product />} />
        <Route path="/addto" element={<Addto />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      {!noNavFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
