import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';
import  StockData from './components/StockData';
import NavBar from './components/NavBar';

const App = () =>  (
    <Container>
    <div className="App">
      <NavBar />
      <StockData />
    </div>
    </Container>
  );


export default App;
