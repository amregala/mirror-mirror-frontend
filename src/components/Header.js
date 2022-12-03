import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Link to="#">
        <Title>MIRROR MIRROR</Title>
      </Link>

      <Subtitle>Selfies of yesterday and today</Subtitle>
    </Wrapper>
  );
};

export default Header;

// ==== STYLED COMPONENT ====//

const Wrapper = styled.header`
  margin-top: 10px;
  text-align: center;
  background-color: #191a1b;
`;

const Title = styled.h1`
  color: #808080;
  color: white;
  letter-spacing: 9px;
  font-size: 65px;

  &:hover {
    cursor: pointer;
    color: #c3a527;
  }
`;

const Subtitle = styled.h2`
  margin-top: -12px;
  padding-bottom: 8px;
  color: white;
  border-bottom: solid 1px #808080;
  font-family: "Bebas Neue", sans-serif;
  font-size: 13px;
  letter-spacing: 10px;
  font-weight: 100;
`;
