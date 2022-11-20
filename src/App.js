import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SignupForm from "./components/FormBoxes/SignupForm";
import TestContainer from "./components/TestContainer";
// import Overview from "./pages/Overview.js";

const App = () => {
  return (
    <div className="Main">
      <Header />
      <Sidebar />
      {/* <Routes> */}
        {/* <Route path="/" element={<Sidebar />}/> */}
        {/* <Route path="users/signup" element={<SignupForm sign/>} /> */}
          {/* <Sidebar /> */}
      {/* </Routes> */}

      {/* <TestContainer /> */}
      {/* <Routes>
          <Route path="/Overview" exact component={Overview} />
        </Routes> */}
    </div>
  );
};

export default App;
