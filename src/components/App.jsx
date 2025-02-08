import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx"
import ValentineCards from "./ValentineCards";
import Date1 from "./dates/Date1";
import Date2 from "./dates/Date2";
import EventDetails from "./EventDetails.jsx";

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dates" element={<ValentineCards />} />
          <Route path="/dates/:id" element={<EventDetails />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
