import React from 'react'
import { Col,Card,Button } from 'react-bootstrap'

interface PropType{
    title:string;
    photo:string;
    price:number;
}


const SingleCard:React.FC<PropType> = (props) => {
  return (
    <Col sm="12" md="4">
    <Card>
      <Card.Img height={300} variant="top" src={props.photo} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default SingleCard