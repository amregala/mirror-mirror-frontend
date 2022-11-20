import React, { useContext, useState } from "react";
// import { FormContext } from "./FormContext";
import {
  BoxContainerSignUp,
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

console.log("current baseURL:", baseURL);

const SignupForm = props => {
  // const { switchToLoginForm } = useContext(FormContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const register = e => {
    e.preventDefault();
    const url = baseURL + "/users/signup";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        // console.log(email, password);
        // console.log("thisworked")
        // CALL GET SELFIES HERE TO GET ALL THE SELFIES AND REFRESH THE PAGE
      });
    setEmail("");
    setPassword("");
    setUsername("");
  };

  // const test = () => {
  //   console.log("Test");
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(email, password);
  // };

  return (
    <BoxContainerSignUp>
      <HeaderText>Create Account</HeaderText>
      <SmallText>Register to continue</SmallText>

      <FormContainer>
        <Input
          type="text"
          placeholder="username"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          // value={username}
        />

        <Input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Input
          type="email"
          placeholder="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <SubmitButton type="submit" onClick={register}>
          Signup
        </SubmitButton>
      </FormContainer>

      {/* <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToLoginForm}>
          Login
        </BoldLink>
      </MutedLink> */}
    </BoxContainerSignUp>
  );
};

export default SignupForm;
