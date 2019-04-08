import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';

class News extends Component {
    render() { 
        return (
        <Container>
           <Row>
               <Col><img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiuICYTNUKTm2ZMtmQ3ULgd5to4zch5vNWcY7RCE4HPCRJ7c5v2Q" alt="news"/></Col>
           </Row>
           <Row>
                <Col><p className="newscontent">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p></Col>
           </Row>
        </Container>
        );
    }
}
 
export default News;