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
      setLoading(false);
      if (response.status === 200) {
        console.log(refactorPurchases(response.data));
        setPurchases(refactorPurchases(response.data));
      } else {
        setPurchases([]);
      }
    })
    .catch((error) => {
      console.error("getPurchases Error:", error);
      setLoading(false);
      setPurchases([]);
    });
};
export const refactorPurchases = (data) => {
  const combinedData = data.reduce((acc, current) => {
    const {
      user_id,
      items,
      total_price,
      purchase_date,
      status,
      address,
      contact,
    } = current;

    if (!acc[user_id]) {
      acc[user_id] = [];
    }

    items.forEach((item) => {
      acc[user_id].push({
        ...item,
        total_price,
        purchase_date,
        status,
        address,
        contact,
      });
    });

    return acc;
  }, {});

  return Object.keys(combinedData).map((user_id) => ({
    user_id,
    purchases: combinedData[user_id],
  }));
};
