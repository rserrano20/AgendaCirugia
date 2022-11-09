import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import cirugiaa from '../img/cirugiaa.jpg'
import uno from '../img/uno.jpg'


const Inicio = () => {
  return (
    <div className="container">
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cirugiaa}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cirugiaa}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={cirugiaa}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Card>
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <section  className="row d-flex justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 text-center mb-3">
    <Card >
      <Card.Img variant="top" src={uno}  className="rounded mt-2"
                 width="55px"
                 height="145px"/>
      <Card.Body>
      <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </div>
    <div className="col-lg-3 col-md-6 text-center mb-3">
    <Card >
      <Card.Img variant="top" src={uno}  className="rounded mt-2"
                  width="55px"
                  height="145px"/>
      <Card.Body>
      <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-3 col-md-6 text-center mb-3">
          <Card >
      <Card.Img variant="top" src={uno}  className="rounded mt-2"
                  width="55px"
                  height="145px"/>
      <Card.Body>
      <Button
                  variant="primary"
                  className="azul rounded-circle"
                  type="button"
                  href="/error404/Error404"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </Button>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
          </div>
    </section>
    </div>
  );
};

export default Inicio;