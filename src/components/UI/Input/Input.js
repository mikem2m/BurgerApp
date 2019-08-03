import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];
    let validationError = null;

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid);
        validationError = <p className={classes.ValidationError}>Please enter a valid {props.elementConfig.placeholder}!</p>
    }
    
    switch(props.elementType){
        case('input'):
            inputElement=<input onChange={props.change} className={inputClasses.join(' ')}{...props.elementConfig} value={props.value}/>;
            break;
        case('textarea'):
            inputElement=<textarea onChange={props.change} className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}/>;
            break;
        case('select'):
            inputElement=(
            <select 
            onChange={props.change}
            className={inputClasses.join(' ')} 
            value={props.value}>
            {props.elementConfig.options.map(el =>{
            return(
            <option key={el.value} value={el.value}>{el.displayValue}</option>
            )})}
            </select>);
            break;
        default:
            inputElement=<input onChange={props.change} className={inputClasses.join(' ')} {...props.elementConfig} value={props.value}/>;
    }
    
    return(
    <div className={classes.Input}>
        <label>{props.label}</label>
        {inputElement}
        {validationError}
    </div>
    )
}

export default input;