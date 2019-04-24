import React from 'react';
import Article from './Article';
import ArticleChoice from './ArticleChoice';

const ArticleSetChoice = ({ currentArticle, addCurrentArticle, nextQuestion }) => {
    return (
        <article>
            {/* News must display data gets from News API */}
            <Article currentArticle={currentArticle} />
            {/* Props transfers the method to ride up child information up to here */}
            <ArticleChoice addCurrentArticle={addCurrentArticle} nextQuestion={nextQuestion}/>
        </article>
    )
}

export default ArticleSetChoice;

