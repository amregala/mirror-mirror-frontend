import React from "react";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

//? ==== IMPORTED COMPONENTS ====//
import Layout from "./components/Layout";
import TestContainer from "./components/TestContainer";
import PublicLanding from "./pages/PublicLanding";
import LoginForm from "./components/FormBoxes/LoginForm";
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
      </Routes>

      <Routes>
        {/***** private routes (protected routes) *****/}
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {/* <TestContainer /> */}
    </div>
  );
};

export default App;
