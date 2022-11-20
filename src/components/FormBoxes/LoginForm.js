import React, { useContext } from "react";
// import { FormContext } from "./FormContext";
import {
  // BoxContainer,
  BoxContainerLogin,
  FormContainer,
  HeaderText,
  SmallText,
  Input,
  MutedLink,
  SubmitButton,
  BoldLink,
  
} from "./common";

const LoginForm = props => {
  // const { switchToSignupForm } = useContext(FormContext);

  return (
    <BoxContainerLogin>
    <HeaderText>Welcome</HeaderText>
    <SmallText>Please sign in to continue</SmallText>
    
      <FormContainer>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <SubmitButton type="submit">Signin</SubmitButton>
      </FormContainer>

      {/* <MutedLink href="#">Forgot your password?</MutedLink> */}

      {/* <MutedLink href="#">
        Don't have an account?
        <BoldLink href="#" onClick={switchToSignupForm}>
          Signup
        </BoldLink>
      </MutedLink> */}
    </BoxContainerLogin>
  );
};

export default LoginForm;
