import React from 'react';
import { Button, Container, Row } from 'reactstrap';
import "./CustomizeQuizz.css";
import DifficultyButton from './DifficultyButtons';

const CustomizeQuizz = ({QuizzCustomize, difficulties, DifficultiesChoice}) => {
    return(
        <Container>
            <header>
                <h1 className="titlePage">Customize your quizz</h1>
            </header>
            <Row>
                {difficulties.map((difficulty, index) => <DifficultyButton difficulty={difficulty} 
                                                                           key={index}
                                                                           DifficultiesChoice={DifficultiesChoice}/>)}
            </Row>
            <Button onClick={QuizzCustomize}>Next</Button>  
        </Container>
    )
}



export default CustomizeQuizz;

