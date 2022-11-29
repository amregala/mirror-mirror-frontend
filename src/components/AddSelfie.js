import "../styles/SelfiesList.css";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const AddSelfie = () => {
  return (
    <div className="AddSelfieWrapper">
      <div>
        <form className="AddSelfieFormBox">
          <h2>Add Selfies Base Form</h2>
          <label className="AddSelfieLabel">Selfie Title:</label>
          <input className="InputLine" />

          <label className="AddSelfieLabel">Year Created</label>
          <input className="InputLine" />

          <label className="AddSelfieLabel">Medium</label>
          <input className="InputLine" />
          <button type="submit">
            <AddCircleOutlineIcon></AddCircleOutlineIcon>Add Selfie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSelfie;
