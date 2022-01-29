import React from "react";
import ai from "../../assets/ai.png";

const LazyHeader = () => {
  return (
    <div className='gpt3--header-image'>
      <img src={ai} alt='AI image' />
    </div>
  );
};

export default LazyHeader;
