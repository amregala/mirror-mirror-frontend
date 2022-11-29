import "../styles/SelfiesList.css";

import EditIcon from "@mui/icons-material/Edit";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const Selfie = () => {
  return (
    <div className="SelfieCardsWrapper">
      <div className="SelfieCard">
        {/* <div>
        <h3>Selfie</h3>
      </div> */}
        <img className="SelfieImg"></img>

        <div className="Selfie-Overlay">
          <div>
            <h3>Artwork Title | </h3>
            <h3>Self-Portrait in a Pandemic</h3>
          </div>
          <div>
            <h3>Year |</h3>
            <h3>2022</h3>
          </div>
          <div>
            <h3>Medium</h3>
            <h3>Painting</h3>
          </div>
        </div>

        <div className="ButtonDiv">
          <button type="submit">
            <EditIcon className="EditBtn"></EditIcon>Edit
          </button>

          <button type="submit">
            <HighlightOffIcon></HighlightOffIcon>Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Selfie;
