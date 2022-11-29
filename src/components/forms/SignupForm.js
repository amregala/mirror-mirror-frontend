import React, { useState } from "react";



import { Link, useNavigate } from "react-router-dom";

import {
  BoxContainerSignUp,
  FormContainer,
  HeaderText,
  SmallText,
  Input,
  SubmitButton,
} from "./common";

let baseURL = "http://localhost:3001";

// const test = config.apiBaseURL;
// if (process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:3001";
// }
// else {
//   baseURL = "HEROKU DEPLOYMENT LINK";
// }

console.log("current baseURL:", baseURL);

const SignupForm = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

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
        setSuccess(true);
        console.log(resJson);
        console.log("in res response:", success);
        // console.log(email, password);
        // CALL USER PROFILE PAGE HERE
      });

    setEmail("");
    setPassword("");
    setUsername("");
    // navigate("/profile");

  };

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
          autoComplete="off"
          id="username"
          // ref={userRef}
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <Input
          type="password"
          placeholder="password"
          autoComplete="off"
          id="password"
          // ref={userRef}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <Input
          type="email"
          placeholder="email"
          autoComplete="off"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <SubmitButton type="submit" onClick={register}>
          Signup
        </SubmitButton>
      </FormContainer>
    </BoxContainerSignUp>
  );
};

export default SignupForm;
