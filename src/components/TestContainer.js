import React from "react";
import styled from "styled-components";

const Bigbox = styled.div`
  width: 700px;
  height: 700px;
  position: relative;
  display: block;
  content-align: right;
  ${"" /* background-color: yellow; */}
  ${"" /* background-image: url */}
  background-size: contain;
  background-repeat: no-repeat;
`;

const TestContainer = () => {
  return (
    <div>
      <Bigbox style={{ backgroundImage: "url(/glimmer.jpg)" }}></Bigbox>
    </div>
  );
};

export default TestContainer;
