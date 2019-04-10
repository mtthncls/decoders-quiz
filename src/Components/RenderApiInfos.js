import React from 'react';
import {Container, Row, Col } from 'reactstrap';

const RenderApiInfos = ({apiInfos}) => {
    return ( 
        <Container>
                <Row>
                    <Col><img src={apiInfos.urlToImage} className="imgSize" alt="news"/></Col>
                </Row>
                <Row>
                    <Col><p className="newscontent">{apiInfos.description}</p></Col>
                </Row>
            </Container>
     );
    }
 
export default RenderApiInfos;

