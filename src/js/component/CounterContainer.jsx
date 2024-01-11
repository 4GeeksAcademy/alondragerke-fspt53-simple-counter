import React, { useState } from "react";
import SecondsCounter from "./SecondsCounter";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CounterContainer = ({ targetTime }) => {
	const [isPaused, setPaused] = useState(false);
    const [isRestarted, setRestarted] = useState(false);

	const handlePauseResume = () => {
		setPaused(!isPaused);
	};

	const handleRestart = () => {
        setRestarted(!isRestarted);
	};

	return (
		<Container className="mt-5">
			<Row className="justify-content-center">
        		<Col>
					<SecondsCounter
						seconds={0}
						countdown={false}
						targetTime={targetTime}
						isPaused={isPaused}
						isRestarted={isRestarted}
						onPauseResume={handlePauseResume}
						onRestart={handleRestart}
					/>
        		</Col>
      		</Row>
			<Row className="mt-5 mb-4 justify-content-center">
				<Col className="col-1">
					<Button variant="outline-primary" className="shadow" onClick={handlePauseResume}>
						{isPaused ? "Resume" : "Pause"}
					</Button>
				</Col>
				<Col className="col-1">
					<Button variant="outline-primary" className="shadow" onClick={handleRestart}>
						Restart
					</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default CounterContainer;