import axios from "axios";
import { setToken } from "../../redux/userSlice";

export const handleSignUp = async (
  e,
  email,
  password,
  setEmail,
  setPassword,
  setSuccessMsg,
  setErrPassword,
  setErrEmail,
  dispatch,
  navigate
) => {
  e.preventDefault();
  setErrEmail("");
  setErrPassword("");
  if (!email) {
    setErrEmail("Enter your email");
    return;
  }
  if (!password) {
    setErrPassword("Enter your password");
    return;
  }
  try {
    const data = new URLSearchParams();
    data.append("username", email);
    data.append("password", password);
    const response = await axios.post(
      "https://mathematical-lavinia-survivor.koyeb.app/token",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          accept: "application/json",
        },
      }
    );
    console.log("RESPONSE Sign in: ", response.data);
    if (response.status === 200) {
      setSuccessMsg("Sign in successful. ...");
      setEmail("");
      setPassword("");
      dispatch(setToken(response.data));
      if (response.data.role === "Admin") {
        setTimeout(() => {
          navigate("/admin");
        }, 1000);
      } else if (response.data.role === "User") {
        setSuccessMsg("Welcome");
        setTimeout(() => {
          navigate("/shop");
        }, 1000);
      }
    } else {
      setErrEmail("Incorrect email or password");
    }
  } catch (error) {
    console.error("Sign in Error:", error);
    if (error.response && error.response.status === 401) {
      setErrEmail("Incorrect email or password");
    } else {
      setErrEmail("Error signing in. Please try again later.");
    }
  }
};
