import axios from "axios";
import { setToken } from "../../redux/userSlice";
import { EmailValidation } from "../../constants/validations";

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
export const handleRegister = async (
  e,
  checked,
  clientName,
  email,
  password,
  setErrClientName,
  setErrEmail,
  setErrPassword,
  setSuccessMsg,
  resetState
) => {
  e.preventDefault();
  if (checked) {
    if (!clientName) {
      setErrClientName("Enter your name");
      return;
    }
    if (!email) {
      setErrEmail("Enter your email");
      return;
    } else {
      if (!EmailValidation(email)) {
        setErrEmail("Enter a Valid email");
        return;
      }
    }
    if (!password) {
      setErrPassword("Create a password");
      return;
    } else {
      if (password.length < 6) {
        setErrPassword("Passwords must be at least 6 characters");
        return;
      }
    }
    if (
      clientName &&
      email &&
      EmailValidation(email) &&
      password &&
      password.length >= 6
    ) {
      try {
        const payload = {
          username: email,
          password: password,
          full_name: clientName,
          email: email,
          role: "User",
        };
        console.log("register payload", payload);
        const response = await axios.post(
          "https://mathematical-lavinia-survivor.koyeb.app/users",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        resetState();
        console.log("register response", response.data);
        if (response.status === 200) {
          setSuccessMsg(
            `Hello dear ${clientName}, Welcome you to OREBI Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
          );
        } else {
          setErrEmail("Unable to create user");
        }
      } catch (error) {
        console.error("Sign in Error:", error);
        setErrEmail("Unable to create user");
      }
    }
  }
};
