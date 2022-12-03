import "../styles/App.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../api/axios";

// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import EditIcon from "@mui/icons-material/Edit";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import ProfileNav from "../components/ProfileNav";
import AddSelfie from "../components/AddSelfie";
import SelfieGrid from "../components/SelfieGrid";
import EditSelfie from "../components/EditSelfie";

let baseURL = "http://localhost:3001";

const Profile = () => {
  const { auth } = useAuth();
  // console.log(auth.user);
  // const navigate = useNavigate();
  // const location = useLocation();

  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedUploadId, setSelectedUploadId] = useState();
  // Going through all the uploads (all selfies uploaded) find the upload with the same id as the selecteduploaded connected to button click event
  const selectedUpload = uploads.find(
    upload => upload._id === selectedUploadId
  );
  console.log("This was the selectedUpload:", selectedUpload);

  useEffect(() => {
    getUploads();
  }, []);

  // ==== GETTING SELFIES  ====//
  const getUploads = async () => {
    setLoading(true);
    try {
      const response = await api.get("/selfies");
      setUploads(response.data.selfies);
      // console.log("Uploads in profile:", response);
      setLoading(false);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };

  // ==== ADDING SELFIE ====//
  function handleAddNew(newSelfie) {
    setUploads([newSelfie, ...uploads]);
  }

  // ==== EDIT SELFIE ====//
  function handleUploadSelected(id) {
    setSelectedUploadId(id);
    // console.log("this was clicked within the selfie card comp")
  }

  function handleSelfieEdit(uploadsArrayCopy) {
    setUploads(uploadsArrayCopy)
  }

  // const handleSelfieEdit = (id, newSelf) => {
  //   e.preventDefault();

  //   const url = baseURL + `/selfies/${id}`;
  //   fetch(url, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then(response => {
  //     const newSelfies = [...uploads];
  //     const index = newSelfies.findIndex(selfie => selfie.id === id);
  //     newSelfies[index] = newSelf;
  //     setUploads(newSelfies);
  //     //console.log("Selfie was edited successfully")
  //   });
  // };

  // ==== DELETE SELFIE ====//
  const handleDelete = id => {
    const url = baseURL + `/selfies/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => {
      const selfiesList = uploads.filter(upload => upload._id !== id);
      setUploads(selfiesList);
      // console.log("Selfie deleted successfully");
    });
  };

  return (
    <div className="Main">
      <ProfileNav />

      <BodyProfileWrapper>
        <AddSelfie uploads={uploads} handleAddNew={handleAddNew} />
        <Line>
          <H2>Added Selfies</H2>

          <SelfieGrid
            uploads={uploads}
            handleDelete={handleDelete}
            handleUploadSelected={handleUploadSelected}
          />
        </Line>
        {selectedUpload && (
          <EditSelfie
            uploads={uploads}
            selectedUpload={selectedUpload}
            handleUploadSelected={handleUploadSelected}
          />
        )}
      </BodyProfileWrapper>
    </div>
  );
};

export default Profile;

// ==== STYLED COMPONENTS ====//
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
