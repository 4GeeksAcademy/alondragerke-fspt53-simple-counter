import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';


const Format = ({ inputRef, onSubmit }) => {
	return (
	  <Container className="text-center mt-5">
		<Form onSubmit={onSubmit} className="col-md-3 mx-auto shadow">
		  <Form.Group className="mb-3">
			<InputGroup>
			  <Form.Control
				type="number"
				ref={inputRef}
				placeholder="Enter a target time"
				aria-label="Target time"
				aria-describedby="basic-addon2"
				className="border-primary"
			  />
			  <Button variant="outline-primary" type="submit" id="button-addon2">
				Set target
			  </Button>
			</InputGroup>
		  </Form.Group>
		</Form>
	  </Container>
	);
  };
  

export default Format;