import React, { useState, useEffect } from 'react';
import StockDisplay from './StockDisplay';
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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>My Stock Watchlist</h2>
      <StockDisplay stockData={stockData} />

    </div>
  );
};

export default StockData;
