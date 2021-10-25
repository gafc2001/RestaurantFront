import React from 'react';
import Step from './Step';
const StepNavegation = ({labelArray,statusIndex}) => {
    return (
        <div className="stepWrapper">
            {
            labelArray.map((item,index) => (<Step key={index} index={index} label={item}  selected={statusIndex === index + 1}></Step>))}
        </div>
    )
}

export default StepNavegation
