import React from 'react';
import Article from './Article';
import ArticleChoice from './ArticleChoice';

const ArticleSetChoice = ({data, method}) => {
    return (
        <article>
            {/* News must display data gets from News API */}
            <Article apiInfos={data}/>
            {/* Props transfers the method to ride up child information up to here */}
            <ArticleChoice method={method} />
        </article>
    )
}

export default ArticleSetChoice;
