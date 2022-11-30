import "./styles/App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
// import api from "./api/axios"


import Layout from "./components/Layout";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import PublicLanding from "./pages/PublicLanding";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div className="Main">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/***** public routes *****/}
          <Route path="/" element={<PublicLanding />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<NotFound />} />

          {/***** private routes (protected routes) *****/}
          <Route element={<RequireAuth />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
