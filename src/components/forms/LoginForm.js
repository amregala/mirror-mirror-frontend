import { useState } from "react";
import useAuth from "../../hooks/useAuth";

import { useNavigate, useLocation } from "react-router-dom";

import {
  BoxContainerLogin,
  FormContainer,
  HeaderText,
  SmallText,
  Input,
  SubmitButton,
} from "./formStyles";

let baseURL = "http://localhost:3001";
// if (process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:3001";
// }
// else {
//   baseURL = "HEROKU DEPLOYMENT LINK";
// }

const LoginForm = props => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/profile";

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const handleLogin = e => {
    e.preventDefault();
    const url = baseURL + "/users/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: pwd,
      }),
      credentials: "include",
    })
      .then(res => res.json())
      .then(resJson => {
        // console.log(user);
      });
    setAuth({ user, pwd });
    setUser("");
    setPwd("");
    navigate(from, { replace: true });
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
            value={user}
            onChange={e => setUser(e.target.value)}
            required
          />

          <Input
            type="password"
            placeholder="password"
            id="password"
            value={pwd}
            onChange={e => setPwd(e.target.value)}
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
