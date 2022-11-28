import "../styles/MetGrid.css"

import useFetchMet from "../hooks/useFetchMet";

function MetGrid(url) {
  // if you want to change the name of the variable data you can by writing it in the curly braces like: data: artwork then refer to data in the return to artwork versus data
  const { data, loading, error } = useFetchMet();

  // this is checking to see if the loading is true
  if (loading) return <h4>Loading...</h4>;

  // if (error) console.log(error);
  console.log("inside comp", data);
  return (
    <div className="CardGrid">
      {/* <h3>Below are the Met Object Ids:</h3> */}
      <div className="CardWrapper">
        {data.map(record => (
          <div className="Card" key={record.data.objectID}>
            <img className="Card_Img" src={record.data.primaryImage}></img>
            <div className="Card-Overlay">
              <h3>{record.data.title} </h3>
              <h4>{record.data.artistDisplayName}</h4>
              <h6>{record.data.repository}</h6>
              <h4>{record.data.objectID}</h4>
            </div>
            <h6>{record.data.medium}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MetGrid;
