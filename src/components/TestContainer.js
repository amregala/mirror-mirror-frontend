import React from "react";
import styled from "styled-components";

const Bigbox = styled.div`
  width: 400px;
  height: 400px;
  position: relative;
  display: block;
  content-align: right;
  background-color: yellow;
`;

const TestContainer = () => {
  return (
    <div>
      <Bigbox></Bigbox>
    </div>
  );
};

export default TestContainer;
