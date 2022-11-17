import React, { useContext } from "react";
import { FormContext } from "./FormContext";
import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
  BoldLink,
} from "./common";

const SignupForm = props => {
  const { switchToLoginForm } = useContext(FormContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Username" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>

      <SubmitButton type="submit">Signup</SubmitButton>
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToLoginForm}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default SignupForm;
