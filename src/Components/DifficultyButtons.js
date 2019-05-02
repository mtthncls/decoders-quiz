import React from 'react';
import { Col, Button } from 'reactstrap';

const DifficultyButton = ({difficulty, DifficultiesChoice, choosenDifficulty}) => {
    return ( 
        <Col className="zoom-button custom" >
            <Button className={choosenDifficulty === difficulty ? "category-chosen" : ""} onClick={() => DifficultiesChoice(difficulty)}>{difficulty}</Button>
        </Col>
     );
}
 
export default DifficultyButton;