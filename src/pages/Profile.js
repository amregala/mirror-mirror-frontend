import "../styles/App.css";
import styled from "styled-components";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
// import api from "../api/axios";
import useFetchSelfies from "../hooks/useFetchSelfies";

// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import EditIcon from "@mui/icons-material/Edit";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ProfileNav from "../components/ProfileNav";
import AddSelfie from "../components/AddSelfie";
import SelfieGrid from "../components/SelfieGrid";

let baseURL = "http://localhost:3001";

const Profile = () => {
  const { auth } = useAuth();
  // console.log(auth.user);
  const { uploads, loading, error } = useFetchSelfies();
  const [selfies, setSelfies] = useState([]);
  // console.log(selfies)

  // let copyOfUploads = {...uploads}
  // console.log(copyOfUploads)
  // setSelfies(copyOfUploads)

  const handleDelete = id => {
    const url = baseURL + `/selfies/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => {
      const selfiesList = uploads.filter(upload => upload._id !== id);
      setSelfies(selfiesList);
      console.log("Selfie deleted successfully");
    });
  };

  return (
    <div className="Main">
      <ProfileNav />

      <BodyProfileWrapper>
        <AddSelfie />
        <Line>
          <H2>Added Selfies</H2>
       
        <SelfieGrid uploads={uploads} handleDelete={handleDelete} />
        </Line>
        {/* <div> */}
        {/* <AddSelfie /> */}
        {/* </div> */}
      </BodyProfileWrapper>
    </div>
  );
};

export default Profile;

// ==== STYLED COMPONENTS ====//
// const CrudNav = styled.nav`
//   width: 100%;
//   background-color: #333;
//   display: flex;
//   flex-direction: row;
//   ${"" /* justify-content: flex-start; */}
//   ${"" /* justify-content: flex-end; */}
//   ${"" /* display: inline-block; */}
//   margin-top: 15px;
//   border-bottom: solid 1px #808080;
// `;

const H2 = styled.h2`
  align-text: left;
  font-size: 20px;
  ${"" /* color: #c3a527; */}
  color: white;
  padding: 10px;
  margin-left: 15px;
`;

const CrudNavUl = styled.ul`
  //   justify-content: flex-end;

  //   display: flex;
  //   flex-wrap: nowrap;
  //   align-items: center;
  //   font-size: 16px;
  //   margin-right: 15px;
  background-color: blue;
`;

// const CrudLi = styled.li`
//   padding: 10px;
//   ${"" /* align-items: space-between; */}
//   ${"" /* content-align: center; */}
//   &:hover {
//     cursor: pointer;
//     color: #c3a527;
//   }
// `;

const BodyProfileWrapper = styled.div`
  max-width: 1920px;
  ${"" /* padding: 10px; */}
  ${"" /* padding-left: 35px; */}
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  ${"" /* background-color: green; */}
`;

const Line = styled.div`
  border-top: 1px solid #808080;
`;
