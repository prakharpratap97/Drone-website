import React from 'react';
import Navbar from './Navbar/Navbar';
import Blog from "./blogcomponents/Blog";
import CarouselTab from './CarouselTab/CarouselTab';
import GetIn from './Get in Touch/GetIn';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Steps from './Options/Steps';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './Navbar/About';
import ErrorPage from './Navbar/ErrorPage';
import LoginPage from './Navbar/LoginPage';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* 👇️ Wrap your Route components in a Routes component */}
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="LoginPage" element={<LoginPage />} />
          <Route path="/" element={<>

          <Banner />
           <Steps />
           <CarouselTab />
           <GetIn />
         </>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}




