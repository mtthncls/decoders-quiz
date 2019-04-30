import React from 'react';
import ArticleSaved from './ArticleSaved';
import { Button, Container } from 'reactstrap';
import './ArticlesRecap.css'
import '../App.css'

const ArticlesRecap = ({ articlesToRecap, correctAnswersCounter, questions, tryButton }) => {
    return (
        <div>
            <Container className="card-support mt-3">
                <h1>Lorem ipsum Username {/* Replace Username by the user input at the beginning*/}</h1>
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
            <div className="zoom-button transition">
                <Button  onClick={tryButton}><span className="Tryagaintext">Try again</span></Button >
            </div>
        </div>
    );
}

export default ArticlesRecap;

