import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import SingleCart from "../components/SingleCart";

const Products = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const comingData = await axios.get("https://fakestoreapi.com/products");
      setProduct(comingData.data);
    };
    fetchApi();
  }, []);

  return (
<>
<h1 className="text-center mt-5">Product List</h1>
    <Row className="mt-5 g-5">
      {product.map((item) => {
        return (
          <SingleCart
            title={item.title}
            photo={item.image}
            desc={item.description}
            key={item.id}
            alldata={item}
          />
        );
      })}
    </Row>
    </>
  );
};

export default Products;
