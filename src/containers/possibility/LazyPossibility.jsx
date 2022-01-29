import React from "react";
import possibilityImage from "../../assets/possibility.png";

const LazyPossibility = () => {
  return (
    <div className='gpt3--possibility-image'>
      <img src={possibilityImage} alt='possibility image' />
    </div>
  );
};

export default LazyPossibility;
