import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
import './PlayButton.css';


const PlayButton = ({launchQuizz}) => {
    return(        
        <Container>
            <header>
                <h1>Quizz des décodeurs</h1>
            </header>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Button color="success" onClick={launchQuizz}>Play</Button>
                </Col>
            </Row>
        </Container>             
    )
}

export default PlayButton;