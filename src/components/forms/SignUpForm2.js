import React, { useState, useEffect } from "react";
import axios from "../../api/axios";

import {
  BoxContainerSignUp,
  FormContainer,
  HeaderText,
  SmallText,
  Input,
  SubmitButton,
} from "../forms/common";

const SIGNUP_URL = "/users/signup";



const SignUpForm2 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [success, setSuccess] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  // const navigate = useNavigate();

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSignUpSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        SIGNUP_URL,
        JSON.stringify({ username, password}),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      setSuccess(true);
      //clear state and controlled inputs
      setEmail("");
      setPassword("");
      setUsername("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
    }
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
          value={username}
          onChange={e => setUsername(e.target.value)}
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
          autoComplete="off"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <SubmitButton type="submit" onClick={handleSignUpSubmit}>
          Signup
        </SubmitButton>
      </FormContainer>
    </BoxContainerSignUp>
  );
};

export default SignUpForm2;
