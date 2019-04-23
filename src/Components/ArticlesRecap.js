import React from 'react';
import ArticleSaved from './ArticleSaved';

const ArticlesRecap = ({articlesToRecap}) => {
    return ( 
        <div>
            <h1>Lorem ipsum Username {/* Replace Username by the user input at the beginning*/}</h1>
            <h2>Score 2/10 {/* Replace with the corresponding component for score */}</h2>
            
             {/* offer something to show if user don't keep any articles*/}
            {articlesToRecap.length === 0 ? <h1>No articles saved</h1> 
            : articlesToRecap.map((article, index) => 
            <ArticleSaved key={index} articlesToRecap={article}/>)}

            {/* that button must send back to the 1st page of the app */}
            <button>Try again</button>
        </div>
     );
}
 
export default ArticlesRecap;
