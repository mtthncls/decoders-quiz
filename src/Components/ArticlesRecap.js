import React from 'react';
import RenderList from './RenderList';

const ArticlesRecap = ({articlesToRecap}) => {
    return ( 
        <div>
            {articlesToRecap.length === 0 ? <h1>No articles saved</h1> 
            : articlesToRecap.map((article, index) => 
            <RenderList key={index} articlesToRecap={article}/>)}
            <button>Try again</button>
        </div>
     );
}
 
export default ArticlesRecap;