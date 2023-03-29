import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
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

const App: React.FC = () => {
  const [products, setProduct] = useState<ProductsType[]>([]);
  const [data,setData] = useState<any>(products);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res: any) => {
      setProduct(res.data);
    });



    let p:any = document.querySelector('p');
    p.style.position = "absolute";
    p.style.zIndex = "-1";
    p.style.fontSize = "50px";
    
    window.onmousemove = (e)=>{
      p.style.left = e.clientX+"px"
      p.style.top = e.clientY+"px"
    }
  }, []);

  const filterResult =(catItem:string)=>{
    const result = products.filter((item:any)=>{
      return item.category === catItem;
    })
    setData(result);
  }
  
  

  return (
    <Container className="mt-5">
      <p>JavaScript</p>
      <h1 className="text-center">Shop List</h1>
      <Link to="/search">Search</Link>
      <div className="my-5">
        <Button onClick={()=>{filterResult("men's clothing")}} className="ms-2">Mens</Button>
        <Button onClick={()=>{filterResult("women's clothing")}} className="ms-2">Womens</Button>
        <Button onClick={()=>{filterResult("jewelery")}} className="ms-2">Jewelery</Button>
      </div>
      <Row className="g-5">
        {data.length === 0 ? products.map((item: any) => {
       return   <SingleCard photo={item.image} title={item.title} price={item.price} key={item.id} />;
        }):data.map((item: any) => {
          return   <SingleCard photo={item.image} title={item.title} price={item.price} key={item.id} />;
           })}
      </Row>
    </Container>
  );
};

export default App;
