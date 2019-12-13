import React from 'react';

const Error = ({message}) => {
    return (
        <p className="alert alert-danger error">
            {message}
        </p>
    );
};

export default Error;