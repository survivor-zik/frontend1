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
      console.log("fetchProducts -- ", response.data);
      console.log("USEF", response.data);
      dispatch(setItems(response.data));
    })
    .catch((err) => {
      console.log("fetchProducts Error -- ", err);
      dispatch(setItems([]));
    });
};
