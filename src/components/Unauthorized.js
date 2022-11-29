import styled from "styled-components";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
const Unauthorized = () => {
  // const navigate = useNavigate();
  // const goBack = () => navigate("/");

  return (
    <>
      <UnAuthDiv>
        <h1>Unauthorized</h1>
        <p>You do not have access to the requested page.</p>
      </UnAuthDiv>
      <NavIcon to="/">
        <ArrowBackIosOutlinedIcon>Go Back</ArrowBackIosOutlinedIcon>
      </NavIcon>
    </>
  );
};

export default Unauthorized;

const UnAuthDiv = styled.div`
  margin-top: 10px;
  margin-left: 25px;
  margin-bottom: 25px;
`;

const NavIcon = styled(Link)`
  margin-left: 25px;
  margin-top: 15px;
  align-items: center;
  color: white;

  &:hover {
    cursor: pointer;
    color: #c3a527;
  }
`;
