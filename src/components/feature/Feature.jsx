import React from "react";
import "./feature.css";

const Feature = ({ title, text, classCustom }) => {
  return (
    <div className='gpt3--features-container-feature'>
      <div className='gpt3--features-container-feature-title'>
        <h1>{title}</h1>
      </div>
      <div className={classCustom}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
