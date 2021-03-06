import React from "react";
import { Feature } from "../../components";
import "./whatgpt3.css";

const WhatGPT3 = () => {
  return (
    <div className='gpt3--whatgpt3 section--margin' id='wgpt3'>
      <div className='gpt3--whatgpt3-feature'>
        <Feature
          title='What is GPT-3'
          text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connetion has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
          classCustom='gpt3--features-container-feature-text text-special'
        />
      </div>
      <div className='gpt3--whatgpt3-heading'>
        <h1 className='gradient--text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3--whatgpt3-container'>
        <Feature
          title='Chatbots'
          text='We so opinion friends me message as delight. whole front do of plate heard oh outght.'
          classCustom='gpt3--features-container-feature-text'
        />
        <Feature
          title='Knowledgebase'
          text='At jointure ladyship an instead so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.'
          classCustom='gpt3--features-container-feature-text'
        />
        <Feature
          title='Education'
          text='At jointure ladyship an instead so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments.'
          classCustom='gpt3--features-container-feature-text'
        />
      </div>
    </div>
  );
};
import "./whatgpt3.css";

export default WhatGPT3;
