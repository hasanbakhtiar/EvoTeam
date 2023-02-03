import { pid } from 'process';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

interface propsType {
    pid:number,
    ptitle:string,
    pprice:number,
    pimg:string
}

const SingleCard = (props:propsType) => {
  return ( 
  
<Col sm={12} md={4}>

<Card >
  <Card.Img variant="top" src={props.pimg} />
  <Card.Body>
    <Card.Title>{props.ptitle}</Card.Title>
    <Card.Text>
      {props.pprice}
    </Card.Text>
    <Link className='btn btn-primary' to={`/movies/${props.pid}`}>Read more</Link>
  </Card.Body>
</Card>
</Col>

  )
}

export default SingleCard