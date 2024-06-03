import axios from "axios";
import { setItems } from "../../redux/orebiSlice";

export const fetchProducts = (dispatch) => {
  axios
    .get("https://mathematical-lavinia-survivor.koyeb.app/products/", {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      dispatch(setItems(response.data));
    })
    .catch((err) => {
      dispatch(setItems([]));
    });
};
