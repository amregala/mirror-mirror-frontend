import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  dispay: flex;
  flex-direction: column;
  align-items: center;
  ${'' /* margin-top: 10px; */}
  margin-top: -200px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MutedLink = styled.a`
  font-size: 12px;
  color: lightgrey;
  font-weight: 600;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 12px;
  color: green;
  font-weight: 600;
  text-decoration: none;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 2px solid #fdcd00;
  padding: 0px 10px;
  border-bottom: 1.4 solid transparent;

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
  padding: 11px 40%;
  color: #fff;
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
