import React, { useState } from "react";
import { Container, Navbar, Form, Row, Col, Button } from 'react-bootstrap';


const NavBar = () => {
  const [searchField, setSearchField] = useState(null);
  const handleOnChange = (e) => {
    console.log(e.target.value);
    setSearchField(e.target.value);
  }
  return (
    <Navbar expand="lg" bg="success" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Spring Stock Watch</Navbar.Brand>
        <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onChange={handleOnChange}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" variant="light">Submit</Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>
  )
}

export default NavBar;
