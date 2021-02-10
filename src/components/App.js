import React from 'react';
import ScheduleList from './ScheduleList';
import ProductList from './ProductList';
import {Container, Row, Col} from "react-bootstrap";
import ScheduleControl from './ScheduleControl';

function App() {
  return (
    <>
      <h1>Avery's Organics</h1>
      <Container>
        <Row>
          <Col>
            <ScheduleControl/>
          </Col>
          <Col>
            <ProductList/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;