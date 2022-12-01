// import Selfie from "./Selfie";
// import "../styles/SelfiesList.css";
// import { useEffect, useState } from "react";
// import api from "../api/axios";

// const SelfiesList = () => {
  // const [uploads, setUploads] = useState([]);
  // const [title, setTitle] = useState("");
  // const [year, setYear] = useState("");
  // const [medium, setMedium] = useState("");
  // const [image, setImage] = useState("");

  // useEffect(() => {
  //   const fetchSelfies = async () => {
  //     try {
  //       const response = await api.get(`/selfies`);
  //       setUploads(response.data);
        // console.log(response.data);
  //     } catch (err) {
  //       if (err.response) {
  //         // Not in the 200 response range
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(`Error: ${err.message}`);
  //       }
  //     }
  //   };
  //   fetchSelfies();
  // }, []);

//   return (
//     <div className="SelfiesList">
//       <div>Where is this</div>
//       <Selfie uploads={uploads} />
//     </div>
//   );
// };

// export default SelfiesList;
