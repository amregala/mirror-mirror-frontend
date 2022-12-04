import { useState } from "react";
import "../styles/EditComp.css";

// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";

let baseURL = "http://localhost:3001";

const EditSelfie = ({
  uploads,
  cardSelected,
  cardSelectedforEdit,
  handleCardChanges,
}) => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [medium, setMedium] = useState("");

  const handleEdit = async e => {
    e.preventDefault();
    // console.log("This was clicked inside of edit");
    // console.log(cardSelected)
    const url = baseURL + `/selfies/${cardSelected._id}`;
    // console.log(url)

    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        year: year,
        medium: medium,
      }),
    })
      .then(response => response.json())
      .then(editedInfo => handleCardChanges(editedInfo))
      .then(editedInfo => {
        console.log("Updated title:", title);
      });
    setTitle("");
    setYear("");
    setMedium("");
  };

  return (
    <div className="selfie-edit">
      <div className="selfie-edit__remove-button-container">
        <button
          className="btn selfie-edit__remove-button"
          onClick={() => cardSelectedforEdit(undefined)}
        >
          &times;
        </button>
      </div>
      <form className="EditSelfieFormBox">
        <h2>Edit Selfie</h2>
        <label htmlFor="title" className="AddSelfieLabel">
          Selfie Title:
        </label>
        <input
          className="selfie-edit_input"
          id="title"
          type="text"
          autoComplete="off"
          placeholder={cardSelected.title}
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label className="AddSelfieLabel" htmlFor="image">
          Image Link (URL):
        </label>

        <label className="AddSelfieLabel" htmlFor="year">
          Year Created:
        </label>
        <input
          className="selfie-edit_input"
          id="year"
          type="text"
          autoComplete="off"
          placeholder={cardSelected.year}
          value={year}
          onChange={e => setYear(e.target.value)}
        />

        <label className="AddSelfieLabel" htmlFor="medium">
          Medium:
        </label>
        <input
          className="selfie-edit_input"
          id="medium"
          type="text"
          autoComplete="off"
          placeholder={cardSelected.medium}
          value={medium}
          onChange={e => setMedium(e.target.value)}
        />

        <button onClick={handleEdit}>
          <EditIcon></EditIcon>Submit Edit
        </button>
      </form>
    </div>
  );
};

export default EditSelfie;
