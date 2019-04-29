import React from 'react';
import { Button, Container, Col, Row } from 'reactstrap';


const HomePage = ({ chooseUsername, chooseUsernamePressEnter, usernameChange, nameRegistered }) => {
    return (
        <Container className="home-page">
            <header className="home-page-header">
                <div>DECODER'S QUIZ</div>
            </header>
            <form onSubmit={chooseUsernamePressEnter}>
                <div><label htmlFor="Username">Please enter a username...</label></div>
                <div> <input placeholder="" name="Username" id="Username"
                    onChange={usernameChange} value={nameRegistered} required /></div>
            </form>
            <br></br>
            <div className="suspense">and...</div>
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <Button color="success" onClick={chooseUsername}>PLAY</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;

