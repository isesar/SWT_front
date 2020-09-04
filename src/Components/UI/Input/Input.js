import React from 'react';
import classes from './Input.css';

const Input = (props) => {
        let inputElement=null;
    switch(props.inputType){
        case('input'):
            inputElement=<input className={classes.Input} {...props}/>;
            break;
        case('textarea'):
            inputElement=<textarea className={classes.Input} {...props}/>;
            break;
        default:
            inputElement=<input className={classes.Input} {...props}/>
        

    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>
                {props.label}
                {inputElement}
            </label>

        </div>
    );
}

export default Input;