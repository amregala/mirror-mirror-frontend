import styled from "styled-components";
import useAuth from "../hooks/useAuth";

// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import EditIcon from "@mui/icons-material/Edit";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";

// import MetGrid from "../components/MetGrid";
import ProfileNav from "../components/ProfileNav";
import SelfiesList from "../_tests-drafts_/SelfiesList";
import AddSelfie from "../components/AddSelfie";
import Selfie from "../_tests-drafts_/Selfie";
// import MetGrid from "../components/MetGrid";
import SelfieGrid from "../components/SelfieGrid";

const Profile = () => {
  const { auth } = useAuth();
  // console.log(auth.user);

  return (
    <div>
      <ProfileNav />
      <CrudNav>
        {/* <CrudNavUl> */}
        <Welcome>Welcome to your profile page {auth.user} </Welcome>
        {/* </CrudNavUl> */}
      </CrudNav>

      <BodyProfileWrapper>
        <SelfieGrid />
        <AddSelfie />
      </BodyProfileWrapper>
    </div>
  );
};

export default Profile;

// ==== STYLED COMPONENTS ====//
const CrudNav = styled.nav`
  width: 100%;
  background-color: #333;
  ${"" /* height: 25px; */}
  display: flex;
  flex-direction: row;
  ${"" /* justify-content: flex-start; */}
  ${"" /* justify-content: flex-end; */}
  ${"" /* display: inline-block; */}
  margin-top: 15px;
  border-bottom: solid 1px #808080;
`;

const Welcome = styled.h2`
  align-text: left;
  font-size: 20px;
  ${"" /* color: #c3a527; */}
  color: white;
  padding: 10px;
  margin-left: 15px;
`;

// const CrudNavUl = styled.ul`
//   justify-content: flex-end;
//   color: #fff;
//   list-style-type: none;
//   display: flex;
//   flex-wrap: nowrap;
//   align-items: center;
//   font-size: 16px;
//   margin-right: 15px;
// `;

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
  display: flex;
  width: 1200px;
  margin-left: 25px;
  margin-right: 25px;
`;
