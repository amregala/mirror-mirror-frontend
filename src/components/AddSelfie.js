import "../styles/SelfiesGrid.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import api from "../api/axios";

import useFetchSelfies from "../hooks/useFetchSelfies";
let baseURL = "http://localhost:3001";

const AddSelfie = () => {
  // const navigate = useNavigate();
  const { uploads, error } = useFetchSelfies();
  // console.log("Uploads in Add Selfie:", uploads);

  const [selfies, setSelfies] = useState([]);
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [medium, setMedium] = useState("");
  const [image, setImage] = useState("");

  const handleAdd = async e => {
    e.preventDefault();

    const newSelfie = { title, year, medium, image };
    // console.log (newSelfie)

    const url = baseURL + "/selfies";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSelfie),
    }).then(res => res.json());
    // .then((response)=> setSelfies(response))
    // .then(response => {
    // console.log(response);
    // .then(resJson => )
    // console.log(email, password);
    // CALL USER PROFILE PAGE HERE
    // });
    setTitle("");
    setYear("");
    setMedium("");
    setImage("");
    // navigate("/profile");
    // return {upload }
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
