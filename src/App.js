import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import TestContainer from "./components/TestContainer";
// import Overview from "./pages/Overview.js";


const App = () => {
  return (
    <Router>
      <div className="Main">
        {/* <h1>Mirror Mirror</h1> */}
        <Header />
        <Sidebar />
        {/* <TestContainer /> */}
        {/* <Routes>
          <Route path="/Overview" exact component={Overview} />
        </Routes> */}
      </div>
    </Router>
  );
};

export default App;


