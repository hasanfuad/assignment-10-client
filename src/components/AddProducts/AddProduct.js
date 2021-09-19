import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [productImageUrl, setProductImageUrl] = useState(null);

  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      image: productImageUrl,
    };
        const url = "http://localhost:5000/addProduct";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => console.log("Data sent", res));
  };

  const imageUpload = (event) => {
    // console.log(event.target.files[0]);

    const products = new FormData();
    products.set("key", "b278a2d4e17062aed0996c67bedbf6d1");
    products.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", products)
      .then((response) => setProductImageUrl(response.data.data.display_url))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Add products</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue="New product add" {...register("example")} />
        <br />
        <input
            name="exampleRequired"
        //   {...register("exampleRequired", { required: true })}
          type="file"
          onChange={imageUpload}
        />
        <br />

        <input type="submit" />
      </form>
    </div>
  );
};
export default AddProduct;
