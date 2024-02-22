import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockData = () => {
  const [stockData, setStockData] = useState(null);
  const[loading, setLoading] = useState(null);
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

stockData.map((stock, index) => console.log(index));



  return (
    <div>
      <h2>Stock Data</h2>
      <ul>
        {stockData.map((stock, index) => (
          <li key={index}>
            <strong>Symbol</strong>{stock["01. symbol"]}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockData;
