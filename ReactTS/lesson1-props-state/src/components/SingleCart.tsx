import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

interface propsType {
  ititle: string;
  iprice: number;
  icent: boolean;
  istock: boolean;
}

const SingleCart = (props: propsType) => {
  return (
    <Col sm="12" md="4">
      <Card>
        <Card.Body>
          <Card.Title className="text-light">{props.ititle}</Card.Title>
          <Card.Text className="text-light">
            {props.iprice} {props.icent ? <span>cent</span> : <span>$</span>}
          </Card.Text>
          <Card.Text className="text-light">
            Stock:
            {props.istock ? (
              <span className="text-success">in stock</span>
            ) : (
              <span className="text-danger">stock out</span>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleCart;
