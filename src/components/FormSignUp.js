import React from "react";
import styled from "styled-components";

const BoxContainer = styled.div`
  ${'' /* margin-left: 180px; */}
  ${'' /* margin-top: 350px; */}
  width: 250px;
  minheight: 550px;
  display: flex;
  flex-direction: column;
  ${'' /* border-radius: 19px; */}
  background-color: #21242b;
  box-shadow: 2px 1px 26px 4px rgba(99, 44, 228, 1);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled.div`
  width: 400%;
  height: 450px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 80%;

  background: lightgrey;
  background: linear-gradient(
    58 deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
`;

const FormSignUp = () => {
  return (
    <div>
      <BoxContainer>
        <TopContainer>
          <BackDrop />
        </TopContainer>
      </BoxContainer>
    </div>
  );
};

export default FormSignUp;
