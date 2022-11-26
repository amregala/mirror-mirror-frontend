import React from "react";
import metApiURL from "../api/metApi";
import Selfie from "./Selfie";

let URL = metApiURL;
console.log(URL);

const showApi = e => {
  e.preventDefault();
  fetch(URL)
    .then(res => res.json())
    .then(resJson => {
      console.log(resJson);
    });
};

const SelfiesList = () => {
  return (
    <div>
      <Selfie />
      <Selfie />
    </div>
  );
};

export default SelfiesList;
