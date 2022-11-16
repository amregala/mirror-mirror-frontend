import React from "react";
import {
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";

const LoginForm = props => {
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <MutedLink href="#">Forgot your password?</MutedLink>
        <SubmitButton type="submit">Signin</SubmitButton>
      </FormContainer>
    </BoxContainer>
  );
};

export default LoginForm;
