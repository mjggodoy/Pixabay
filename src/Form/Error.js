import React from 'react';


const Error = ({errorMessage}) => {
    return(
        <p className="my-3 p-4 text-center text-white alert-danger">{errorMessage}</p>
    );
}

export default Error;