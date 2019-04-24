import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
import './PlayButton.css';


const HomePage = ({chooseUsername, usernameSubmit, usernameChange, isNameRegistered}) => {
    return(        
        <Container>
            <header>
                <h1>Décodeurs Quizz</h1>
            </header>
            <form onSubmit={usernameSubmit}>
                <label htmlFor="Username">
                    <input placeholder="Username" name="Username" id="Username" onChange={usernameChange} value={isNameRegistered} />
                </label>
            </form>
             <br></br>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Button type="submit" name="submit"  color="success" onClick={chooseUsername}>Play</Button>
                </Col>
            </Row>
        </Container>             
    )
}

export default HomePage;