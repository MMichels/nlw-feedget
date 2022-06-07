import React from 'react';

const Error = ({error} : {error: string}) => {
    return (
        <p className="text-center text-red-400">
            {error}
        </p>
    );
};

export default Error;