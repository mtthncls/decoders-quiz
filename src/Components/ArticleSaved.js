import React from 'react';
import { Card, CardText, Container, Row, Col} from 'reactstrap';

const ArticleSaved = ({articlesToRecap}) => {
    return ( 
        <article>
            <Container className="mt-3">
                <Card style={{backgroundColor: "#FF9F1C"}}className="mt-3 card-support" body inverse>
                    <Row>
                        <Col sm="12" lg="3">
                            <CardText className="m-3" >
                                <img className="newsPictures" src={articlesToRecap.urlToImage} alt="Article"></img>
                            </CardText>
                        </Col>
                        <Col sm="12" lg="8" className="newsText">
                            <h3>
                                <CardText style={{color: "black", fontSize : "16px"}}>
                                    {articlesToRecap.title.toUpperCase()}
                                </CardText>
                            </h3>
                            <div>
                                <button className="mt-2 readMeButton"><a style={{color : "white"}} href={articlesToRecap.url}> Read Me > </a></button>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </article>
     );
}
 
export default ArticleSaved;

