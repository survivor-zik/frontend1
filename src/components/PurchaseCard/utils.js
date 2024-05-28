import axios from "axios";

export const fetchItemDetails = (id, setItemData) => {
  axios
    .get(`https://mathematical-lavinia-survivor.koyeb.app/products/${id}`, {
      headers: {
        "Content-type": "application/json",
      },
    })
    .then((response) => {
      console.log("get single Purchases Response", response.data);
      if (response.status === 200) {
        setItemData(response.data);
      } else {
        setItemData([]);
      }
    })
    .catch((error) => {
      console.error("getPurchases Error:", error);
    });
};
