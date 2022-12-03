import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

import { useNavigate, useLocation } from "react-router-dom";

import {
  BoxContainerSignUp,
  FormContainer,
  HeaderText,
  SmallText,
  Input,
  SubmitButton,
} from "./formStyles";

let baseURL = "http://localhost:3001";

// const test = config.apiBaseURL;
// if (process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:3001";
// }
// else {
//   baseURL = "HEROKU DEPLOYMENT LINK";
// }

// console.log("current baseURL:", baseURL);

const SignupForm = () => {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [user, setUser] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/profile";

  const register = e => {
    e.preventDefault();
    const url = baseURL + "/users/signup";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        email: email,
        password: pwd,
      }),
      credentials: "include",
    })
      .then(res => res.json())
      .then(resJson => {
        // console.log(user);
      });
    setAuth({ user, pwd });
    setEmail("");
    setPwd("");
    setUser("");
    navigate(from, { replace: true });
  };

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
          value={user}
          onChange={e => setUser(e.target.value)}
        />

        <Input
          type="password"
          placeholder="password"
          autoComplete="off"
          id="password"
          value={pwd}
          onChange={e => setPwd(e.target.value)}
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
