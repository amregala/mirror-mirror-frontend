import styled from "styled-components";

export const BoxContainerLogin = styled.div`
  width: 100%;
  dispay: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 185px; 
  ${'' /* margin-top: -180px; */}
`;

export const BoxContainerSignUp = styled.div`
  width: 100%;
  dispay: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 185px; 
  ${'' /* margin-top: -180px; */}
`;


export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;


export const HeaderText = styled.h2`
  margin-top: -180px;
  font-size: 24px;
  ${"" /* font-weight: 600; */}
  line-height: 1.2;
  color: #fff;
  z-index: 10;
`;

export const SmallText = styled.h5`
  font-family: "Poppins";
  font-weight: 200;
  color: #fff;
  font-size: 14px;
  z-index: 10;
`;

export const MutedLink = styled.a`
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  color: whitesmoke;
  text-decoration: none;
  text-align: center;
  padding: 10px;
  display: block;
  margin-top: 15px;
  ${"" /* margin-top: 10px; */}
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: #fdcd00;
  font-weight: 600;
  text-decoration: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 2px solid #21242b;
  padding: 0px 10px;
  border-bottom: 1.4 solid transparent;
  transitionL all 200ms ease-in-out;

  &::placeholder {
    color: rgba (200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid #fdcd00;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  margin-top: 15px;
  padding: 11px;
  color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #632ce4;
  background: linear-gradient(
    58 deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );

  &:hover {
    filter: brightness(1.03);
  }
`;
