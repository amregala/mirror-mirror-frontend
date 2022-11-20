import React, { useContext, useState } from "react";
// import { FormContext } from "./FormContext";
import {
  // BoxContainer,
  BoxContainerLogin,
  FormContainer,
  HeaderText,
  SmallText,
  Input,
  SubmitButton,
  MutedLink,
  BoldLink,
} from "./common";

let baseURL = "http://localhost:3001";
// if (process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:3001";
// }
// else {
//   baseURL = "HEROKU DEPLOYMENT LINK";
// }

const LoginForm = props => {
  // const { switchToSignupForm } = useContext(FormContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = e => {
    const url = baseURL + "/users/login";

    e.preventDefault();
    console.log(username);
    console.log(url);
  };

  return (
    <BoxContainerLogin>
      <HeaderText>Welcome</HeaderText>
      <SmallText>Please sign in to continue</SmallText>

      <FormContainer>
        <Input
          type="text"
          placeholder="username"
          id="username"
          value={username}
        />

        <Input
          type="password"
          placeholder="password"
          id="password"
          value={username}
        />

        <SubmitButton type="submit" onClick={handleLogin}>
          Signin
        </SubmitButton>
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
