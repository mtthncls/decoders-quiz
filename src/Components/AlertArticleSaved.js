import React from 'react';
import { Alert, Container } from 'reactstrap';

const AlertArticleSaved = () => {
    return ( 
        <div>
            <Container>
                <Alert color="success">
                    Your article has been saved succesfully !
                </Alert>
            </Container>
        </div>
     );
}
 
export default AlertArticleSaved;
