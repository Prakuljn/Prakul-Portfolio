import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Experience from "./components/Experience/Experience";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <Preloader/>
    <Helmet>
      <title>Prakul Jain | AI/ML & Data Science Engineer</title>
      <meta name="description" content="Official portfolio of Prakul Jain – AI/ML Engineer, Data Scientist, and Deep Learning enthusiast. Explore projects, experiences, and contact information." />
      <meta name="keywords" content="Prakul Jain, AI ML Engineer, Data Scientist, Deep Learning, Python, Portfolio, Machine Learning, AI Developer, Prakul Jain Portfolio" />
      <meta name="author" content="Prakul Jain" />
      
      {/* Google Site Verification */}
      <meta name="google-site-verification" content="cnNdQJ-gkTA7Etyi9QZ0JlzvLqzNr2w3yDSshIqsH6g" />
      
      {/* Open Graph Meta Tags for social sharing (Facebook, LinkedIn, etc.) */}
      <meta property="og:title" content="Prakul Jain | AI/ML Portfolio" />
      <meta property="og:description" content="Explore Prakul Jain’s projects, AI/ML experience, and Data Science contributions." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://prakuljain-portfolio.netlify.app" />
      <meta property="og:image" content="https://prakuljain-portfolio.netlify.app/preview-image.png" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Prakul Jain | AI/ML Engineer" />
      <meta name="twitter:description" content="Portfolio of Prakul Jain showcasing AI, ML, and Data Science projects." />
      <meta name="twitter:image" content="https://prakuljain-portfolio.netlify.app/preview-image.png" />

      <link rel="canonical" href="https://prakuljain-portfolio.netlify.app" />
    </Helmet>


    <div className="App" id={load ? "no-scroll" : "scroll"}>
      
      <Navbar />
      <ScrollToTop />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contacts">
        <Contact />
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
