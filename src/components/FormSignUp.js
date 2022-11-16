import React from "react";
import styled from "styled-components";
import LoginForm from "./LoginForm";

const BoxContainer = styled.div`
  ${"" /* margin-left: 180px; */}
  ${"" /* margin-top: 350px; */}
  width: 250px;
  minheight: 550px;
  display: flex;
  flex-direction: column;
  ${"" /* border-radius: 19px; */}
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
  width: 200%;
  height: 350px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 65%;
  transform: rotate(40deg);
  top: -290px;
  left: -70px;
  background: #632ce4;
  background: linear-gradient(
    58 deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  margin-top: -220px;
  font-size: 30px;
  ${"" /* font-weight: 600; */}
  line-height: 1.2;
  color: #fff;
  z-index: 10;
`;

const SmallText = styled.h5`
  font-family: "Poppins";
  font-weight: 200;
  color: #fff;
  font-size: 14px;
  z-index: 10;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const FormSignUp = () => {
  return (
    <div>
      <BoxContainer>
        <TopContainer>
          <BackDrop />
          <HeaderContainer>
            <HeaderText>Welcome</HeaderText>
            <SmallText>Please sign in to continue</SmallText>
          </HeaderContainer>
        </TopContainer>
        <InnerContainer>
            <LoginForm></LoginForm>
        </InnerContainer>
      </BoxContainer>
    </div>
  );
};

export default FormSignUp;
