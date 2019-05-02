import React from 'react';
import { Container } from 'reactstrap';

const AlertArticleSaved = ({ isArticleSaved }) => {
    return (
        <div >
            <Container >
                <img className="validation" alt="validation"
                    src={isArticleSaved
                        ? "https://media1.tenor.com/images/84a1cbe0c104df77f82dcb512de1f06d/tenor.gif"
                        : "https://media.giphy.com/media/afqT2ykIlYcVi/giphy.gif"}>
                </img>
                {isArticleSaved
                    ? <h1 className="validation card-support">Your article has been successfully saved !</h1>
                    : <h1 className="validation card-support">What ? You didn't like it ?</h1>}
            </Container>
        </div>
    );
}

export default AlertArticleSaved;
