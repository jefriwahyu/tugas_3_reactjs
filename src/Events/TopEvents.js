import React from 'react';

function TopEvents(){
    const handleFooter = (value, e) => {
        e.preventDefault();
        alert(value);
    };

    return(
        <div>
            <a href="/" onClick={e => handleFooter("Back to Home", e)}>Back To Home</a>
        </div>
    )
};

export default TopEvents;
