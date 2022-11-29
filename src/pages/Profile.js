// import React from "react";
// import { useNavigate } from "react-router-dom";

// import Nav from "../components/UserNav";

// let baseURL = "http://localhost:3001";

// const Profile = props => {
// const navigate = useNavigate();

// const handleLogout = e => {
//   e.preventDefault();
//   const url = baseURL + "/users/logout";
// const user = { username, password };
// fetch(url, {
//   method: "DELETE",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   credentials: "include",
// })
//   .then(res => res.json())
//   .then(resJson => {
//     console.log(resJson);
//     console.log(url);
//   });
// navigate("/");
// };

//   return (
//     <div>
//       <h1>profile page</h1>

//       <button onClick={handleLogout}>LogOut</button>
//     </div>
//   );
// };

// export default Profile;


import MetGrid from "../components/MetGrid";
import ProfileNav from "../components/ProfileNav";

const Profile = () => {
  return (
    <div>
      <ProfileNav />
      <MetGrid />
    </div>
  );
};

export default Profile;
