import React from "react";

const Step = ({selected,index,label}) => {
  return (
    <div className={"stepBlock"+(selected ?" selected":'')}>
      <div className="circleWrapper" >
        <div className="circle">{index + 1}</div>
      </div>
      <span>{label}</span>
    </div>
  );
};

export default Step;
