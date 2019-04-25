import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
import '../App.css';


const HomePage = ({chooseUsername, usernameChange, nameRegistered}) => {
    return(        
        <Container>
            <header>
                <h1>Décodeurs Quizz</h1>
            </header>
            <form>
                <label htmlFor="Username">
                    <input placeholder="Username" name="Username" id="Username" 
                           onChange={usernameChange} value={nameRegistered}/>
                </label>
            </form>
             <br></br>
            <Row className="zoom-button">
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Button type="submit" name="submit" color="success" onClick={chooseUsername}>PLAY</Button>
                </Col>
            </Row>
        </Container>             
    )
}

export default HomePage;

