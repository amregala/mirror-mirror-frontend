// import "../styles/SelfiesList.css";
// import EditIcon from "@mui/icons-material/Edit";
// import HighlightOffIcon from "@mui/icons-material/HighlightOff";

// import { Link } from "react-router-dom";
// import axios from "../api/axios";

// import useFetchSelfies from "../hooks/useFetchSelfies";

// import { useState } from "react";

// const Selfie = ({ uploads }) => {
//   const allUploads = [{ ...uploads }];
//   console.log(allUploads);

  // console.log(allUploads.title)

  // const handleDelete = () => {
  //   axios
  //     .delete(`http://localhost:3001/selfies/${upload}`)
  //     .then(data => {
  //       console.log(data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // return (
    
  //   <div className="SelfieCardsWrapper">
  //     {allUploads.map(upload => (
  //       <div className="SelfieCard" key={upload.selfies.id}>
  //         <img className="SelfieImg" ></img>

  //         <div className="Selfie-Overlay">
  //           <div>
  //             <h3>Artwork Title | </h3>
  //             <h3>{upload.title}</h3>
  //           </div>

  //           <div>
  //             <h3>Year | </h3>
  //             <h3>{upload.year}</h3>
  //           </div>

  //           <div>
  //             <h3>Medium | </h3>
  //             <h3>{upload.medium}</h3>
  //           </div>
  //         </div>

  //         <div className="ButtonDiv">
  //           <button type="submit">
  //             <EditIcon className="EditBtn"></EditIcon>Edit
  //           </button>

            {/* <button onClick={() => handleDelete(upload)}>
            <HighlightOffIcon></HighlightOffIcon>Delete
          </button> */}
//           </div>
//         </div>
//      ))} 
//     </div>  
//   );
// };

// export default Selfie;