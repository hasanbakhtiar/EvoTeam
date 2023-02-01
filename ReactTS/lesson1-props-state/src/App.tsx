import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import SingleCart from "./components/SingleCart";
import productlist from "./data/product";

interface stateType {
  title: string;
  price: number;
  stock: boolean;
  cent: boolean;
  
}

const App = () => {
  const [state, setState] = useState<stateType[]>(productlist);
  return (
        <>
        
        
        <Header/>
        <Container>
      <h1 className="text-center text-light">Products List</h1>
      <Row>
        {state.map((item: any, i: number) => {
          return (
            <SingleCart
              ititle={item.title}
              iprice={item.price}
              icent={item.cent}
              istock={item.stock}
            />
          );
        })}
      </Row>
    </Container>
        
        
        
        
        </>
  );
};

export default App;
