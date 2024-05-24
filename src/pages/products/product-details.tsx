import React from "react";
import { useParams } from "react-router-dom";
import Productdetails from "../../component/product/product-details";

const SingleProduct = () => {
  const params = useParams();
  const id = params.id;
  console.log(params);
  return <div>{id && <Productdetails id={Number(id)} />}</div>;
};

export default SingleProduct;
