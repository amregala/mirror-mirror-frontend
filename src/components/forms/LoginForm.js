import { useState } from "react";


import { useNavigate } from "react-router-dom";

import {
  // BoxContainer,
  BoxContainerLogin,
  FormContainer,
  HeaderText,
  SmallText,
  Input,
  SubmitButton,
} from "./common";

let baseURL = "http://localhost:3001";
// if (process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:3001";
// }
// else {
//   baseURL = "HEROKU DEPLOYMENT LINK";
// }

const LoginForm = props => {
  const [user, setUser] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [errMsg, setErrMsg] = useState("");
  // THERORETICALLY WE WOULD REPLACE SUCCESS WITH ACTION FROM REACT ROUTER
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const url = baseURL + "/users/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // username: username,
        username: user,
        password: password,
      }),
      credentials: "include",
    })
      .then(res => res.json())
      .then(resJson => {
        console.log(resJson);
        console.log(user);
        // getSelfies();
      });
    setUser("");
    setPassword("");
    // console.log(success);
    navigate("/profile/");
  };

  const getSelfies = () => {
    fetch(baseURL + "/selfies", {
      credentials: "include",
    }).then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        return [];
      }
    });
  };

  return (
    <>
      <BoxContainerLogin>
        <HeaderText>Welcome</HeaderText>
        <SmallText>Please sign in to continue</SmallText>

        <FormContainer>
          <Input
            type="text"
            placeholder="username"
            id="username"
            autoComplete="off"
            // value={username}
            // onChange={e => setUsername(e.target.value)}
            value={user}
            onChange={e => setUser(e.target.value)}
            required
          />

          <Input
            type="password"
            placeholder="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <SubmitButton type="submit" onClick={handleLogin}>
            Signin
          </SubmitButton>
        </FormContainer>
      </BoxContainerLogin>
    </>
  );
};

export default LoginForm;
