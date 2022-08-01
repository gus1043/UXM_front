import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import {ImSearch} from 'react-icons/im';

function MainHeader() {
  return (
    <div style={{
     marginBottom:'3rem'
    }}>
      <Container>

        <Row>
          <Col></Col>
          <Col xs={6}> <InputGroup className="mb-3">
        <Button variant="outline-secondary" id="button-addon1" style={{background:"#eeeeee"}}>
        <ImSearch />
        </Button>
        <FormControl
          placeholder="Search Music"
          aria-label="Search"
          aria-describedby="SearchMusic"
        />
      </InputGroup></Col>
      <Col></Col>
        </Row>

        
      </Container>

    </div>
  )
}

export default MainHeader