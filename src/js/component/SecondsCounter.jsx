import React, { useState, useEffect } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "/workspaces/alondragerke-fspt53-simple-counter/src/styles/index.css";


const SecondsCounter = (props) => {
    const [seconds, setSeconds] = useState(props.seconds);

    useEffect (() => {
        let intervalId;

        if (!props.countdown && !props.isPaused) {
            intervalId = setInterval (() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
    
                if (props.targetTime && seconds + 1 === parseInt(props.targetTime, 10)) {
                    alert("Target time reached!");
                }
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [props.countdown, props.isPaused, seconds, props.targetTime]);

    useEffect(() => {
        if (props.isRestarted) {
            setSeconds(0);
        }
    }, [props.isRestarted]);

    const digitComponents = Array.from(String(seconds).padStart(6, "0"));

    return (
        <Container className="seconds-counter">
            <Row>
                <Col className="col-style">
                    <AiOutlineClockCircle />
                </Col>
                {digitComponents.map((digit, index) => (
                    <Col key={index} className="col-style">
                        {digit}
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default SecondsCounter;