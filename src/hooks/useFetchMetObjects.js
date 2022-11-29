import { useEffect, useState } from "react";
import api from "../api/metObjects";

function useFetchMetObjects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  let endpoints = [
    21209, 436532, 437397, 208978, 436840, 437869, 747607, 10765, 10604, 12656,
    13395, 238882, 393729, 13053, 342475, 505722, 436258, 387713, 11797, 729216,
    408993, 12701, 227729, 336670, 337062, 436297, 436222, 11383, 435984, 19524,
    437874, 811610, 459254, 231083, 436544, 11366, 13105, 207591, 435802,
    483438, 437392, 436210, 437504, 10345, 15026, 436257, 437831, 437747,
    437390, 335668, 436538, 10472, 236688, 436158, 435870, 436658, 717547,
    435896, 459185, 436017, 437510, 436896, 436623, 437532, 12678, 435581,
    437875, 435807, 341453, 10205, 20639, 437317, 435856, 336324, 437531,
    441115, 669033, 438722, 436454, 336228, 626692, 334312, 667471, 211509,
    436367, 435873, 437879, 460858, 435670, 393509, 391625, 423003, 15078,
    10606, 13393, 363671, 271813, 16859, 428637, 392912, 340905, 459214, 286386,
    426019, 334135, 286022, 698749, 369807, 789798, 459963, 438545, 393502,
    393491, 283119, 359324, 368058, 15307, 358786, 765749, 360121, 391677,
    371742, 391676, 391675, 423005, 821857, 420955, 639556, 286230, 11786,
    382550, 364147, 238889, 773290, 286164, 294434, 384575, 384605, 342463,
    730800, 821858, 373813, 285754, 376109, 337883, 435895, 387677, 700489,
    459074, 437921, 436709, 285444, 200640, 437396,
  ];

  const getData = async () => {
    setLoading(true);
    await Promise.all(endpoints.map(endpoint => api.get(`/${endpoint}`)))
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

export default useFetchMetObjects;