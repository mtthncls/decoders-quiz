import React from 'react';
import { Container } from 'reactstrap';

const AlertArticleSaved = ({isArticleSaved}) => {
    return ( 
        <div >
            <Container >
                <img className="validation" alt="validation" 
                    src={isArticleSaved 
                        ? "https://media1.tenor.com/images/84a1cbe0c104df77f82dcb512de1f06d/tenor.gif"
                        : "https://media.giphy.com/media/afqT2ykIlYcVi/giphy.gif"}>
                </img>
            </Container>
        </div>
     );
}
 
export default AlertArticleSaved;
