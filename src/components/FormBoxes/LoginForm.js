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

const LoginForm = props => {
  const { switchToSignupForm } = useContext(FormContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
      </FormContainer>

      {/* <MutedLink href="#">Forgot your password?</MutedLink> */}
      <SubmitButton type="submit">Signin</SubmitButton>
      <MutedLink href="#">
        Don't have an account?
        <BoldLink href="#" onClick={switchToSignupForm}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default LoginForm;
