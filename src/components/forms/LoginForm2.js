import { useState, useEffect } from "react";
// import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";
import useAuth from "../../hooks/useAuth";

import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  BoxContainerLogin,
  FormContainer,
  HeaderText,
  SmallText,
  Input,
  SubmitButton,
} from "../forms/common";

// This is what you have in the backend node js
const LOGIN_URL = "/users/login";

const LoginForm2 = () => {
  // const { setAuth } = useContext(AuthContext);
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/profile";

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ username: user, password: pwd }),
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      );
      // console.log(resJson)
      console.log(response.data);
      console.log(JSON.stringify(response?.data));

      setAuth({ user, pwd });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
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
            // ref={userRef}
            autoComplete="off"
            onChange={e => setUser(e.target.value)}
            value={user}
            required
          />

          <Input
            type="password"
            placeholder="password"
            id="password"
            onChange={e => setPwd(e.target.value)}
            value={pwd}
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

export default LoginForm2;
