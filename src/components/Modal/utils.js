import axios from "axios";
import { Bounce, toast } from "react-toastify";

export const uploadProduct = (values, pic, token) => {
  const url = `https://mathematical-lavinia-survivor.koyeb.app/products/?name=${encodeURIComponent(
    values.name
  )}&price=${values.price}&description=${encodeURIComponent(
    values.description
  )}&colors=${encodeURIComponent(values.color)}&categories=${encodeURIComponent(
    values.category
  )}`;
  let formData = new FormData();
  formData.append("file", pic);
  console.log(pic);
  console.log(token);
  axios
    .post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("response", response.data);
    })
    .catch((error) => {
      console.log("error", error);
      toast.error("Error while adding product", {
        transition: Bounce,
      });
    });
};
