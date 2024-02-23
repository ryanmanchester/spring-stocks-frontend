import React, { useState, useEffect } from 'react';
import StockDisplay from './StockDisplay';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

const StockData = () => {
  const [stockData, setStockData] = useState(null);
  const[loading, setLoading] = useState(true);
  const[error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/my-stocks');
        setStockData(response.data.List);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if(loading) {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          </Col>
        </Row>
     </Container>
   );
  }

  return (
    <div>
      <h2>My Stock Watchlist</h2>
      <StockDisplay stockData={stockData} />

    </div>
  );
};

export default StockData;
