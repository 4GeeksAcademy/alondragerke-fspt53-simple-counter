import React, { useState, useRef } from "react";
import CounterContainer from "./CounterContainer";
import Container from 'react-bootstrap/Container';
import Format from "./Format";

const Home = () => {
	const [targetTime, setTargetTime] = useState(null);
	const inputRef = useRef(null);
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  const inputValue = inputRef.current.value;
	  setTargetTime(inputValue);
	};
  
	return (
	  <Container className="text-center">
		<CounterContainer targetTime={targetTime} />
		<Format setTargetTime={setTargetTime} inputRef={inputRef} onSubmit={handleSubmit} />
	  </Container>
	);
  };

export default Home;
