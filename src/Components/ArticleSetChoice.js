import React from 'react';
import {Container} from 'reactstrap';
import Article from './Article';
import ArticleChoice from './ArticleChoice';

const ArticleSetChoice = ({ currentArticle, addCurrentArticle, nextQuestion, correctSpecialCharacters }) => {
    return (
        <article>
            <Container>
            <h1 className="card-support mt-3">Become an expert in </h1>
            {/* News must display data gets from News API */}
            <div className="card-support">
            <Article currentArticle={currentArticle} correctSpecialCharacters={correctSpecialCharacters} />
            {/* Props transfers the method to ride up child information up to here */}
            <ArticleChoice addCurrentArticle={addCurrentArticle} nextQuestion={nextQuestion}/>
            </div>
            </Container>
        </article>
    )
}

export default ArticleSetChoice;

