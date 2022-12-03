import { useState } from "react";
import "../styles/EditComp.css";

// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";

let baseURL = "http://localhost:3001";

const EditSelfie = ({ uploads, selectedUpload, handleUploadSelected, handleSelfieEdit }) => {
//   const [title, setTitle] = useState("");
//   const [year, setYear] = useState("");
//   const [medium, setMedium] = useState("");
//   const [image, setImage] = useState("");


  function handleChange(changes) {
    handleChangeStuff(selectedUpload.id, { ...selectedUpload, ...changes });
  }


  const handleEdit = (e) => {
    const url = baseURL + `/selfies/${selectedUpload}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(response => {
       ( id, editedUpload) => {
        const uploadsArrayCopy = [...uploads];
        const index = uploadsArrayCopy.findIndex(s => s.id === id);
        uploadsArrayCopy[index] = editedUpload;
        handleSelfieEdit(editedUpload)
    }
        // setUploads(UploadsArrayCopy);
        //console.log("Selfie was edited successfully")
      });
  };

  //   going to take the id of the selfie we want to change as well as the info from the new selfie info we are goign to replace the old info with
//   function handleChangeStuff(id, newSelfie) {
//     const uploadsArrayCopy = [...uploads];
//     const index = uploadsArrayCopy.findIndex(s => s.id === id);
//     uploadsArrayCopy[index] = newSelfie;
//   }

//   function handleChange(changes) {
//     handleChangeStuff(selectedUpload.id, { ...selectedUpload, ...changes });
//   }

  return (
    <div className="selfie-edit">
      <div className="selfie-edit__remove-button-container">
        <button
          className="btn recipe-edit__remove-button"
          onClick={() => handleUploadSelected(undefined)}
        >
          {" "}
          &times;{" "}
        </button>
      </div>
      <form className="EditSelfieFormBox">
        <h2>Edit Selfie</h2>
        <label htmlFor="title" className="AddSelfieLabel">
          Selfie Title:
        </label>
        <input
          className="InputLine"
          id="title"
          type="text"
          autoComplete="off"
          value={selectedUpload.title}
          onInput={e => handleChange({ title: e.target.value })}
        />

        <label className="AddSelfieLabel" htmlFor="image">
          Image Link (URL):
        </label>
        <input
          className="InputLine"
          id="image"
          type="text"
          autoComplete="off"
          value={selectedUpload.image}
          onInput={e => handleChange({ image: e.target.value })}
          //   onChange={e => setImage(e.target.value)}
        />

        <label className="AddSelfieLabel" htmlFor="year">
          Year Created:
        </label>
        <input
          className="InputLine"
          id="year"
          type="text"
          autoComplete="off"
          value={selectedUpload.year}
          onInput={e => handleChange({ image: e.target.value })}
          //   onChange={e => setYear(e.target.value)}
        />

        <label className="AddSelfieLabel" htmlFor="medium">
          Medium:
        </label>
        <input
          className="InputLine"
          id="medium"
          type="text"
          autoComplete="off"
          value={selectedUpload.medium}
          onInput={e => handleChange({ image: e.target.value })}
          //   onChange={e => setMedium(e.target.value)}
        />

        <button>
          <EditIcon></EditIcon>Submit Edit
        </button>
      </form>
    </div>
  );
};

export default EditSelfie;
