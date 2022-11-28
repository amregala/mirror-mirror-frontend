import { useEffect, useState } from "react";
import axios from "axios";
// import { MetObjectIDs } from "../MetObjectIDs";

function useFetchMet() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let endpoints = [
      21209, 436532, 437397, 208978, 436840, 437869, 747607, 10765, 10604,
      12656, 13395, 238882, 393729, 13053, 342475, 505722, 436258,
      387713, 11797, 729216, 408993, 12701, 227729, 336670, 337062, 436297,
      436222, 11383, 435984, 19524, 437874, 811610, 459254, 231083, 436544,
      11366, 13105, 207591, 435802, 483438, 437392, 436210, 437504, 10345,
      15026, 436257, 437831, 437747, 437390, 335668, 436538, 10472, 236688,
      436158, 435870, 436658, 717547, 435896, 459185, 436017, 437510, 436896,
      436623, 437532, 12678, 435581, 437875, 435807, 341453, 10205, 20639,
      437317, 435856, 336324, 437531, 441115, 669033, 438722, 436454, 336228,
      626692, 334312, 667471, 211509, 436367, 435873, 437879, 460858, 435670,
      393509, 391625, 423003, 15078, 10606, 13393, 363671, 271813, 16859,
      428637, 392912, 340905, 459214, 286386,
    ];

    setLoading(true);
    await axios
      .all(
        endpoints.map(endpoint =>
          axios.get(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${endpoint}`
          )
        )
      )
      // .then(data => console.log("this is where this is happening:", data))
      .then(response => setData(response))
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  // console.log("After useEffect:", data);

  return { data, loading, error };
}

export default useFetchMet;
