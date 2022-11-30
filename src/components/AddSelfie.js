import "../styles/SelfiesList.css";
import { useState } from "react";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import api from "../api/axios";

// import axios from "axios";
let baseURL = "http://localhost:3001";

const AddSelfie = () => {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [medium, setMedium] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = async e => {
    e.preventDefault();
    const selfie = { title, year, medium, image };
    // console.log (selfie)

    const url = baseURL + "/selfies";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        year: year,
        medium: medium,
        image: image,
      }),
    })
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        // console.log(email, password);
        // CALL USER PROFILE PAGE HERE
      });
    setTitle("");
    setYear("");
    setMedium("");
    setImage("");
  };

  return (
    <div className="AddSelfieWrapper">
      <div>
        <form className="AddSelfieFormBox">
          <h2>Add A Selfie</h2>
          <label htmlFor="title" className="AddSelfieLabel">
            Selfie Title:
          </label>
          <input
            className="InputLine"
            id="title"
            type="text"
            autoComplete="off"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <label className="AddSelfieLabel" htmlFor="image">
            Image Link (URL):
          </label>
          <input
            className="InputLine"
            id="image"
            type="text"
            autoComplete="off"
            value={image}
            onChange={e => setImage(e.target.value)}
          />

          <label className="AddSelfieLabel" htmlFor="year">
            Year Created:
          </label>
          <input
            className="InputLine"
            id="year"
            type="text"
            autoComplete="off"
            value={year}
            onChange={e => setYear(e.target.value)}
          />

          <label className="AddSelfieLabel" htmlFor="medium">
            Medium:
          </label>
          <input
            className="InputLine"
            id="medium"
            type="text"
            autoComplete="off"
            value={medium}
            onChange={e => setMedium(e.target.value)}
          />

          <button type="submit" onClick={handleAdd}>
            <AddCircleOutlineIcon></AddCircleOutlineIcon>Add Selfie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSelfie;
