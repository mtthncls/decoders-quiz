import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
import "./CustomizeQuizz.css";

const CustomizeQuizz = ({QuizzCustomize}) => {
    return(
        <Container>
            <header>
                <h1 className="titlePage">Customize your quizz </h1>
            </header>
            <Button onClick={QuizzCustomize}>Next</Button>  
        </Container>
    )
}



export default CustomizeQuizz;
