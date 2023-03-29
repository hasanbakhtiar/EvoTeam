import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Button, Container, Row, InputGroup, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import SingleCard from "../components/SingleCard";

interface ProductsType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const Search: React.FC = () => {
  const [products, setProduct] = useState<ProductsType[]>([]);
  const [query,setQuery] = useState<string>("");
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res: any) => {
      setProduct(res.data);
    });
  }, []);

 



  return (
    <Container className="mt-5">
      <Link to="/">Home</Link>
      <InputGroup className="mb-3 my-5">
        <Form.Control
          placeholder="Search product"
          onChange={(e:any)=>{setQuery(e.target.value)}}
        />
        <Button variant="success" >
          Search
        </Button>


      </InputGroup>
      <Row className="g-5">
        {products.filter(item=>item.title.toLocaleLowerCase().includes(query)).map((item: any) => {
          return (
            <SingleCard
              photo={item.image}
              title={item.title}
              price={item.price}
              key={item.id}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Search;
