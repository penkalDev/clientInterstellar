/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SolarSystem from "./components/SolarSystem/SolarSystem";
import Astronauts from "./components/Astronauts/Astronauts";
import Ships from "./components/Ships/Ships";
import PlanetDetails from "./components/PlanetDetails/PlanetDetails";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import Form from "./components/Form/Form";
import Success from "./components/Form/Success/Success";

function App() {
  return (
    <div>
      <Header />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/solarSystem" element={<SolarSystem />} />
        <Route path="/famousAstronauts" element={<Astronauts />} />
        <Route path="/fleet" element={<Ships />} />
        <Route path="/details/planets/:planetId" element={<PlanetDetails />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
