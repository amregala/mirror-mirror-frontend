import { useEffect, useState } from "react";
import api from "../api/axios";

function useFetchSelfies() {
  const [uploads, setUploads] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUploads();
  }, []);

  const getUploads = async () => {
    setLoading(true);
    try {
      const response = await api.get("/selfies");
      setUploads(response.data.selfies);
      console.log("UseFetchSelfies response.data:", response);
      // console.log("UseFetch setUploads", uploads)
      setLoading(false);
    } catch (err) {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      } else {
        console.log(`Error: ${err.message}`);
      }
    }
  };
  return { uploads, loading, error };
}

export default useFetchSelfies;
