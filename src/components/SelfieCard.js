import "../styles/SelfiesGrid.css";
import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link } from "react-router-dom";

const SelfieCard = ({ upload, handleDelete, cardSelectedforEdit, handleChange }) => {
  return (
    <>
      <div className="SelfieCardsWrapper">
          {/* <Link to={`/selfies/${upload.id}`}> */}
          <div className="SelfieCard" key={upload._id}>
            <img className="Card_Img" src={upload.image}></img>
            <div className="Selfie-Overlay">
              <h3>{upload.title}</h3>
              <h4>{upload.year}</h4>
              <h4>{upload.medium}</h4>
            </div>
          </div>

          <div className="ButtonDiv">
            <button onClick={() => cardSelectedforEdit(upload._id)}>
              <EditIcon className="EditBtn"></EditIcon>Edit
            </button>

            <button onClick={() => handleDelete(upload._id)}>
              <HighlightOffIcon></HighlightOffIcon>Delete
            </button>
          </div>
        {/* </Link> */}
      </div>
    </>
  );
};

export default SelfieCard;
