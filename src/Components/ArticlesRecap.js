import React from 'react';
import ArticleSaved from './ArticleSaved';
import { Button, Container, Row, Col } from 'reactstrap';
import './ArticlesRecap.css'
import '../App.css'

const ArticlesRecap = ({ articlesToRecap, correctAnswersCounter, questions, tryButton, newPlayer, customMessage }) => {
    return (
        <div>
            <Container className="card-support mt-3">
                <h1>{customMessage()} {/* Replace Username by the user input at the beginning*/}</h1>
                <p className="answersCounter"> You have <span className="correctAnswers">{correctAnswersCounter}</span> correct answers on <span className="correctAnswers">{questions.length}</span> questions</p>
            </Container>
            <Container className="card-support mt-5">
                <h1>Here's your reading list : </h1>
            </Container>
            {/* offer something to show if user don't keep any articles*/}
            {articlesToRecap.length === 0
                ? <h1>No articles saved</h1>
                : articlesToRecap.map((article, index) =>
                    <ArticleSaved key={index} articlesToRecap={article} />)}

            {/* that button sends back to the "choose category" page of the app */}
            <Row>
            <Col sm="12" md="6"><div className="zoom-button transition">
            <Button onClick={tryButton}><span>Try again</span></Button > 
            </div>
            </Col>
            <Col sm="12" md="6">
            <div className="new-player"> <Col><Button onClick={newPlayer}><span>New Player</span></Button ></Col>
            </div>
            </Col>
            </Row>
        </div>
    );
}

export default ArticlesRecap;

