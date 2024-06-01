import axios from "axios";
import { Bounce, toast } from "react-toastify";

export const editProduct = (
  id,
  values,
  pic,
  token,
  closeModal,
  setUploading
) => {
  let formData;
  setUploading(true);
  const params = new URLSearchParams();
  if (values.name) params.append("name", values.name);
  if (values.price) params.append("price", values.price);
  if (values.description) params.append("description", values.description);
  if (values.color) params.append("colors", values.color);
  if (values.category) params.append("categories", values.category);
  const url = `https://mathematical-lavinia-survivor.koyeb.app/products/${id}?${params.toString()}`;
  console.log("url", url);
  if (pic) {
    formData = new FormData();
    formData.append("image", pic);
  } else {
    formData = {};
  }

  console.log("this is token", token);
  axios
    .put(url, formData, {
      headers: {
        accept: "application/json",
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => {
      console.log("response", response.data);
      setUploading(false);
      toast.success("Product Updated Successfully. ", {
        transition: Bounce,
      });
      closeModal(false);
      setTimeout(() => {
        window.location.reload();
      }, 2500);
    })
    .catch((error) => {
      console.log("error", error);
      setUploading(false);
      toast.error("Error while updating product", {
        transition: Bounce,
      });
    });
};
