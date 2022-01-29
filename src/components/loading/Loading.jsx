import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import "./loading.css";

const Loading = () => {
  return (
    <div className='loading__container'>
      <AiOutlineLoading3Quarters className='loading__spinner' />
    </div>
  );
};

export default Loading;
