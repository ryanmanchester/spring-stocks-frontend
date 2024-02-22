import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Navbar, Form, Row, Col, Button } from 'react-bootstrap';


const NavBar = () => {
  const [searchField, setSearchField] = useState(null);
  const [symbol, setSymbol] = useState(null);

  const handleOnChange = (e) => {
    setSearchField(e.target.value);
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    try{
      const result = await axios.get(`http://localhost:8080/add-stock/${searchField}`);
      setSymbol(result.data.List);
    } catch {
      console.log("Error searching");
    }

  }

  useEffect(() => {
    console.log("Mounted");
  }, [])



  return (
    <Navbar expand="lg" bg="success" data-bs-theme="dark">
      <Container>
        <Navbar.Brand>Spring Stock Watch</Navbar.Brand>
        <Form inline onSubmit={handleOnSubmit}>
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
            <Button type="submit" variant="light" onSubmit={handleOnSubmit}>Submit</Button>
          </Col>
        </Row>
      </Form>
      </Container>
    </Navbar>
  )
}

export default NavBar;
