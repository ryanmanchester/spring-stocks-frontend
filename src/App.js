import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import  StockData from './StockData';

const App = () =>  (
    <Container>
    <div className="App">
      <StockData />
    </div>
    </Container>
  );


export default App;
