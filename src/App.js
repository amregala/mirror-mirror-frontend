import React, { useState, useEffect } from "react";
import "./App.css";

// if(process.env.NODE_ENV === 'development') {
//   baseURL = 'http://localhost:3000'
// } else {
//   baseURL = 'heroku backend url'
// }

// let baseURL = "";

// if (process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:3000";
// } else {
//   baseURL = "";
// }
// console.log("current base url:", baseURL);

const App = () => {
  // let [responseData, setResponseData] = useState(null);

  // useEffect(() => {
  //   setResponseData("Mirror Mirror");
  //   console.log(responseData);
  // }, [setResponseData, responseData])

  // useEffect(() => {
  //   // GET request using fetch inside useEffect React hook
  //   fetch("http://localhost:3001/selfies")
  //     .then(response => response.json())
  //     .then(() => setResponseData(responseData));
  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    fetch(`http://localhost:3001/selfies`)
      .then(response => response.json())
      .then((usefulData) => {
        console.log(usefulData);
        setLoading(false);
        setData(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`)
      });
  }, []);



  return (
    <div className="Main">
      <h1>MIRROR MIRROR</h1>
    </div>
  );
};

export default App;
