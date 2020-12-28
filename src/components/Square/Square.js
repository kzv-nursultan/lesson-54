import React from 'react';
import './Square.css';

const Square = props =>{

    return (
        <div className={props.className} onClick={props.clickSquare}></div>
    );
};

export default Square;