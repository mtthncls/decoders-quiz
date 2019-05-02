import React from 'react';
import { Row, Col, Card, CardText } from 'reactstrap';const Article = ({ currentArticle, correctSpecialCharacters }) => {
   return (
       <div>
           <Card style={{backgroundColor: "#FF9F1C"}}className="mt-3">
                   <Row>
                       <Col sm="12" lg="3">
                           <CardText className="m-3" >
                               <img className="newsPictures" src={currentArticle.urlToImage} alt="Current News"></img>
                           </CardText>
                       </Col>
                       <Col sm="12" lg="8" className="newsText">
                           <h3>
                               <CardText style={{color: "black", fontSize : "16px"}}>
                                   {correctSpecialCharacters(currentArticle.title)}
                               </CardText>
                           </h3>
                           <div>
                               <p>{correctSpecialCharacters(currentArticle.description)}</p>
                           </div>
                       </Col>
                   </Row>
               </Card>
           <Row>
               <Col><h2 className="button-title mt-3">Do you want to read this news later ?</h2></Col>
           </Row>
       </div>
   );
}

export default Article;
