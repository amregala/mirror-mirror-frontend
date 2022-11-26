import React from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

//? ==== IMPORTED COMPONENTS ====//
// import Layout from "./components/Layout";

import PublicLanding from "./pages/PublicLanding";

import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="Main">
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}

        {/***** public routes *****/}
        <Route path="/" element={<PublicLanding />} />
        {/* <Route path="login" element={<LoginForm />} /> */}
        {/* <Route path="login" element={<LoginForm />}></Route> */}
    

  
        {/***** private routes (protected routes) *****/}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
