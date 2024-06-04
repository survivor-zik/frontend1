import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { resetCart } from "../../redux/orebiSlice";

export const uploadPurchase = (
  address,
  contact,
  products,
  totalAmount,
  setErr,
  dispatch,
  navigate
) => {
  if (!contact) {
    setErr("Please enter a valid contact");
    return;
  }
  if (!address) {
    setErr("Please enter a valid address");
    return;
  }
  const payload = {
    items: transformObjectsToItems(products),
    total_price: totalAmount,
    status: "pending",
    address,
    contact,
  };
  console.log("payload", payload);
  axios
    .post(
      "https://mathematical-lavinia-survivor.koyeb.app/purchases/",
      payload,
      {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
    .then((response) => {
      console.log("purchase-added response", response.data);
      dispatch(resetCart());
      toast.success("Order Placed", {
        transition: Bounce,
      });
      navigate("/");
    })
    .catch((error) => {
      console.log("purchase-added response", error);
      toast.error("Unable to place Order", {
        transition: Bounce,
      });
    });
};
function transformObjectsToItems(objects) {
  return objects.map((obj) => ({
    product_id: obj._id,
    quantity: obj.quantity,
  }));
}
