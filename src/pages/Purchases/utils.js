import axios from "axios";

export const getPurchases = async (token, setPurchases, setLoading) => {
  console.log(token);
  axios
    .get("https://mathematical-lavinia-survivor.koyeb.app/purchases/", {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("getPurchases Response", response.data);
      if (response.status === 200) {
        setPurchases(response.data);
        setLoading(false);
      } else {
        setLoading(false);
        setPurchases([]);
      }
    })
    .catch((error) => {
      console.error("getPurchases Error:", error);
      setLoading(false);
      setPurchases([]);
    });
};
