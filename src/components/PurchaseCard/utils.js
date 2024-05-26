import axios from "axios";

export const fetchItemDetails = (id, setItemData, setLoading) => {
  axios
    .get(`https://mathematical-lavinia-survivor.koyeb.app/products/${id}`)
    .then((response) => {
      console.log("getPurchases Response", response.data);
      if (response.status === 200) {
        setItemData(response.data);
        setLoading(false);
      } else {
        setLoading(false);
        setItemData([]);
      }
    })
    .catch((error) => {
      console.error("getPurchases Error:", error);
      setLoading(false);
      setItemData([]);
    });
};
