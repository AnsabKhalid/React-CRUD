import React from 'react';

const Button = (props) => {
    
    return (
        <>
            <button onClick={props.click} className={`btn ${props.typebtn}`}>{props.children}</button>
        </>
    )
}

export default Button
