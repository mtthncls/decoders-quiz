import React from 'react';
import {Container} from 'reactstrap';
import Article from './Article';
import ArticleChoice from './ArticleChoice';

const ArticleSetChoice = ({ currentArticle, addCurrentArticle, nextQuestion, correctSpecialCharacters, catTitle }) => {
    return (
        <article>
            <Container>
                <header className="card-support head mt-3">
                    <h1>Become an expert in {catTitle}</h1>
                </header>
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

