import Table from 'react-bootstrap/Table';

const StockDisplay = ({stockData}) => {
  return (
    <Table striped>
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
    </Table>
  )
}

export default StockDisplay;
