import React from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCart } from "react-use-cart";

const SingleCart = ({ photo, title, desc, alldata }) => {
  const { addItem } = useCart();
  const notify = () =>
    toast.success("🦄 Product added", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  return (
    <Col sm={12} md={4}>
      <Card>
        <Card.Img variant="top" src={photo} height={300} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc.substring(0, 30)}...</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              notify(addItem(alldata));
            }}
          >
            Add to cart
          </Button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCart;
