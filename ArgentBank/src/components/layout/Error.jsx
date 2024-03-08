import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1>La page que vous cherchez n'éxiste pas</h1>
            <Link className='error-404-link' to='/'>
                <p className='error-404'>Retour à la page Accueil</p></Link>
        </div>
    );
};

export default Error;