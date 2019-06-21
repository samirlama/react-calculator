import React from 'react';
import './Button.css';

const isOperater = val =>{
    return !isNaN(val) || val === "." || val === "=";
} 

const Button = props => 
    
    (
            <div className = {`button-wrapper ${
                isOperater(props.children) ? null : "operator"
            }`}
                onClick={()=> props.handleClick(props.children)}
            > 
                {props.children}
            </div>
        )

export default Button;
    
