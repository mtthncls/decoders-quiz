import React from 'react';
import "./CorrectAnswersCounter.css";

const CorrectAnswersCounter = ({ correctAnswersCounter, questions }) => {



    return (
        <div className="correctAnswersCounter">

            <p> You have <strong>{correctAnswersCounter}</strong> correct answers on <strong>{questions.length}</strong> questions</p>

        </div>

    )
}
export default CorrectAnswersCounter;
