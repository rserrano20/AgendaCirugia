import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import conttacto from "../img/conttacto.jpg";

export default function Contacto() {
  return (
    <div className="container">
      <h1>Contacto</h1>
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="nombre" placeholder="Enter nombre" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className="col-sm-12 col-md-6">
          <Card className="bg-dark text-white">
            <Card.Img src={conttacto} width="550" height="450" />
            <Card.ImgOverlay>
              <Card.Title className="text-black">Card title</Card.Title>
              <Card.Text className="text-black">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text className="text-black">
                Last updated 3 mins ago
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  );
}
