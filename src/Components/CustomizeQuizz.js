import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
import "./CustomizeQuizz.css";

const CustomizeQuizz = ({}) => {
    return(
        <Container>
            <header>
                <h1 className="titlePage">Customize your quizz </h1>
            </header>
            <h2>Numbers of questions :</h2>
            <Row>
                <Col><Button>10</Button></Col>     
                <Col><Button>20</Button></Col>     
                <Col><Button>30</Button></Col>
            </Row>
            <h2>Choose your difficulty :</h2>
            <Row>
                <Col><Button>Easy</Button></Col>     
                <Col><Button>Medium</Button></Col>     
                <Col><Button>Hard</Button></Col>
            </Row>
            <Button>Next</Button>  
        </Container>
    )
}



export default CustomizeQuizz;