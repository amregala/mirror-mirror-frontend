import React, { useState } from "react";
import styled from "styled-components";
import { FormContext } from "./FormContext";
import { motion } from "framer-motion";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";

// ===== Base container box  =====
const BoxContainer = styled.div`
  ${"" /* margin-left: 180px; */}
  ${"" /* margin-top: 350px; */}
  width: 250px;
  min-height: 450px;
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

const BackDrop = styled(motion.div)`
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

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "160%",
    height: "550px",
    transform: "roate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

const UserSkeletonForm = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("login");
  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignupForm = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToLoginForm = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("login");
    }, 400);
  };

  const contextValue = { switchToSignupForm, switchToLoginForm };

  return (
    <FormContext.Provider value={contextValue}>
      <div>
        <BoxContainer>
          <TopContainer>
            <BackDrop
              initial={false}
              animate={isExpanded ? "expanded" : "collapsed"}
              variants={backdropVariants}
              transition={expandingTransition}
            />
            {active === "login" && (
              <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <SmallText>Please sign in to continue</SmallText>
              </HeaderContainer>
            )}

            {active === "signup" && (
              <HeaderContainer>
                <HeaderText>Create Account</HeaderText>
                <SmallText>Register to continue</SmallText>
              </HeaderContainer>
            )}
          </TopContainer>
          <InnerContainer>
            {active === "login" && <LoginForm />}
            {active === "signup" && <SignupForm />}
            {/* <LoginForm></LoginForm> */}
            {/* <p onClick={playExpandingAnimation}>Click Me</p> */}
          </InnerContainer>
        </BoxContainer>
      </div>
    </FormContext.Provider>
  );
};

export default UserSkeletonForm;
