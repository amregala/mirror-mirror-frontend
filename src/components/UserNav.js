// import React from "react";
// import styled from "styled-components";
// import { Link, useNavigate } from "react-router-dom";
// let baseURL = "http://localhost:3001";

// // ?==== STYLED COMPONENTS ====//
// const NavLi = styled.ul`
//   fontsize: 50px;
//   color: white;
//   text-decoration: none;
// `;

// !  ==== ACTUAL COMPONENT ====//
// const UserNav = () => {
  //   const auth = localStorage.getItem("user");
  //   const auth = fetch(baseURL + "/users/_id", {
  //     credientials: "include",
  //   });
  // const navigate = useNavigate();
  //   const logout = () => {
  //     // localStorage.clear();
  //     fetch(baseURL + "/users/logout")
  //     navigate("/");
  //   };

  //   const test = () => {
  //     fetch( baseURL + "/users/login", {
  //         credentials: "include"
  //     })
  //     console.log(username)
  //   }

  // return (
//     <nav>
//       <NavLi>
//         <li>
//           <Link to="/profile">USER PROFILE</Link>
//         </li>
//         <li>
//           <Link to="/addselfie">Add New Selfie</Link>
//         </li>
//         <li></li>
//       </NavLi>
//     </nav>
//   );
// };

// export default UserNav;
