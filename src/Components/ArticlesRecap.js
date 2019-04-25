import React from 'react';
import ArticleSaved from './ArticleSaved';
import './ArticlesRecap.css'
const ArticlesRecap = ({ articlesToRecap, correctAnswersCounter, questions, tryButton }) => {
    return (
        <div>
            <h1>Lorem ipsum Username {/* Replace Username by the user input at the beginning*/}</h1>
            <p className="answersCounter"> You have <span className="correctAnswers">{correctAnswersCounter}</span> correct answers on <span className="correctAnswers">{questions.length}</span> questions</p>

            {/* offer something to show if user don't keep any articles*/}
            {articlesToRecap.length === 0
                ? <h1>No articles saved</h1>
                : articlesToRecap.map((article, index) =>
                    <ArticleSaved key={index} articlesToRecap={article} />)}

            {/* that button must send back to the 1st page of the app */}
            <button onClick={tryButton}>Try again</button >
        </div>
    );
}

export default ArticlesRecap;

