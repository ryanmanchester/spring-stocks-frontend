import React, { useState, useEffect } from 'react';
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
      <h2>Stock Data</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Previous Close</th>
            <th>Change</th>
            <th>Change Percent</th>
            <th>Latest Trading Day</th>
          </tr>
        </thead>
        <tbody>
          {stockData.map((stock, index) => (
            <tr key={index}>
              <td>{stock["01. symbol"]}</td>
              <td>{stock["02. open"]}</td>
              <td>{stock["03. high"]}</td>
              <td>{stock["04. low"]}</td>
              <td>{stock["05. price"]}</td>
              <td>{stock["06. volume"]}</td>
              <td>{stock["08. previous close"]}</td>
              <td>{stock["09. change"]}</td>
              <td>{stock["10. change percent"]}</td>
              <td>{stock["07. latest trading day"]}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default StockData;
