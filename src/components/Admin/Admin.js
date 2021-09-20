import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Admin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [productImage, setProductImage] = useState(null);

  const onSubmit = (data) => {
    const product = {
      name: data.name,
      image: productImage,
    };
    const url = "http://localhost:5000/addProduct";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(product),
    }).then((response) => {
      console.log("Data sent", response);
    });
  };

  const handleUploadImage = (event) => {

    const productImageUrl = new FormData();

    productImageUrl.set("key", "b278a2d4e17062aed0996c67bedbf6d1");
    productImageUrl.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", productImageUrl)
      .then((response) => {
        setProductImage(response.data.data.display_url);
      })
      .catch((error)=>{
	console.log(error);
});
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="New product add" {...register("name")} />
        <br />
        <input
          {...register("exampleRequired", { required: true })}
          onChange={handleUploadImage}
          type="file"
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Admin;
