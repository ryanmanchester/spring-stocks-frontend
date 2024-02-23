import React, { useState, useEffect } from "react";
import axios from 'axios';
import StockData from './StockData';
import { Container, Navbar, Form, Row, Col, Button } from 'react-bootstrap';

const NavbarForm = () => {
  const [searchField, setSearchField] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [error, setError] = useState(null);

  const handleOnChange = (e) => {
    setSearchField(e.target.value);
  }

  const handleOnSubmit = async (e) => {
    try{
      const result = await axios.get(`http://localhost:8080/add-stock/${searchField}`);
      setSymbol(result.data.List);
    } catch(error) {
      console.error(error)
      setError(error)
    }

  }

  useEffect(() => {
    console.log("Mounted");
  }, [])

  return (
    <Form onSubmit={handleOnSubmit}>
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
  )
}

export default NavbarForm;
