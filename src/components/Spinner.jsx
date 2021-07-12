import React from 'react';

const Spinner = () => {
    return (
        <div>
            <img className={"animate-spin h-10 w-10 mx-auto"}
                 src={"https://img.icons8.com/material-outlined/24/ffffff/spinner-frame-4.png"} alt="Loading"/>
        </div>
    );
}

export default Spinner;