import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
  const { auth } = useAuth();
  console.log (auth.user)

  const logout = async () => {
    // setAuth({});
    try {
      const response = await axios.delete("/users/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};

export default useLogout;
