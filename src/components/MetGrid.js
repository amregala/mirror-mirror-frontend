import styled from "styled-components";
import "../styles/MetGrid.css";
import useFetchMetObjects from "../hooks/useFetchMetObjects";

function MetGrid() {
  // if you want to change the name of the variable data you can by writing it in the curly braces like: data: artwork then refer to data in the return to artwork versus data
  const { data, loading, error } = useFetchMetObjects();

  // this is checking to see if the loading is true
  if (loading) return <LoadText>Loading...</LoadText>;

  // if (error) console.log(error);
  console.log("inside component MetGrid:", data);
  return (
    <div className="CardGrid">
      {/* Below is the Data displayed for the met objects  */}
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

const LoadText = styled.h4`
  margin-top: 25px;
  margin-left: 25px;
`;
