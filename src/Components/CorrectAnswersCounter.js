import React from 'react';

const CorrectAnswersCounter = ({ correctAnswersCounter, questions }) => {



    return (
        <div>

            <p className="correctAnswersCounter"> You have <strong>{correctAnswersCounter}</strong> correct answers on <strong>{questions.length}</strong> questions</p>

        </div>

    )
}
export default CorrectAnswersCounter;
