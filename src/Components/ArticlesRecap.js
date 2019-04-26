import React from 'react';
import ArticleSaved from './ArticleSaved';
import { Container } from 'reactstrap';
import './ArticlesRecap.css'

const ArticlesRecap = ({ articlesToRecap, correctAnswersCounter, questions, tryButton }) => {
    return (
        <div>
            <Container>
                <h1>Lorem ipsum Username {/* Replace Username by the user input at the beginning*/}</h1>
                <p className="answersCounter"> You have <span className="correctAnswers">{correctAnswersCounter}</span> correct answers on <span className="correctAnswers">{questions.length}</span> questions</p>

                {/* offer something to show if user don't keep any articles*/}
                {articlesToRecap.length === 0 
                ? <h1>No articles saved</h1>
                : articlesToRecap.map((article, index) =>
                    <ArticleSaved key={index} articlesToRecap={article} />)}

                {/* that button sends back to the "choose category" page of the app */}
                <button className={"tryAgain"} onClick={tryButton}><span className="Tryagaintext">Try again</span></button >
            </Container>
        </div>
    );
}

export default ArticlesRecap;

