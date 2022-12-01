import "../styles/SelfiesList.css";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import useFetchSelfies from "../hooks/useFetchSelfies";

const SelfieGrid = () => {
  const { uploads, error } = useFetchSelfies();

  if (error) console.log(error);
  console.log("useFetchSelfie Data:", uploads);



  return (
    <div className="SelfieCardsWrapper">
      {uploads.map(upload => ( 
        <div className="SelfieCard" key={upload.id}>
          <img className="Card_Img" src={upload.image}></img>
         
          <div className="Selfie-Overlay">
            <h3>{upload.title}</h3>
            <h4>{upload.year}</h4>
            <h4>{upload.medium}</h4>
          </div>

          <div className="ButtonDiv">
            <button type="submit">
              <EditIcon className="EditBtn"></EditIcon>Edit
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default SelfieGrid;

// ==== STYLED COMPONENTS ====//
// const LoadText = styled.h4`
//   margin-top: 25px;
//   margin-left: 25px;
// `;
