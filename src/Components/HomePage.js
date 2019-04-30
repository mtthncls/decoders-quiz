import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';
import '../App.css';


const HomePage = ({chooseUsername, usernameChange, nameRegistered}) => {
    return(        
        <Container>
            <header className="card-support head">
                <h1>Decoder's Quiz</h1>
            </header>

            <div className="card-support">
                <h3>Welcome to the Quiz ! You will have a multiple choice of themes, 
                    each providing a series of questions, all with a choice between 4 possibles answers, 
                    select the one you think is correct by clicking it ! 
                    Stay informed by reading the latest news of the chosen theme. Have fun !
                </h3>
            </div>

            <div className="card-support">
            <h3>Choose your username :</h3>
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

