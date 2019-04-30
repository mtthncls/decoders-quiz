import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
import '../App.css';


const HomePage = ({chooseUsername, usernameChange, nameRegistered}) => {
    return(        
        <Container>
            <header className="card-support head">
                <h1>Decoder's Quizz</h1>
            </header>
            <div className="card-support">
            <h3>Welcome to the quiz, please choose your username :</h3>
            <form>
                <label htmlFor="Username">
                    <input className="input-container" placeholder=" Username" name="Username" id="Username" 
                           onChange={usernameChange} value={nameRegistered}/>
                </label>
            </form>
             <br></br>
            <Row className="zoom-button transition">
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Button type="submit" name="submit" onClick={chooseUsername}>PLAY</Button>
                </Col>
            </Row>
            </div>
        </Container>             
    )
}

export default HomePage;

