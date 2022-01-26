import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => {
  return (
    <div className='gpt3--blog section--padding' id='blog'>
      <div className='gpt3--blog-heading'>
        <h1 className='gradient--text'>
          A lot is happening. We are blogging about it.
        </h1>
      </div>
      <div className='gpt3--blog-container'>
        <div className='gpt3--blog-container-groupA'>
          <Article
            imageUrl={blog01}
            date='Jan 26, 2022'
            title='GPT-3 and OpenAI os the future. Let us explore how it is?'
          />
        </div>
        <div className='gpt3--blog-container-groupB'>
          <Article
            imageUrl={blog02}
            date='Jan 26, 2022'
            title='GPT-3 and OpenAI os the future. Let us explore how it is?'
          />
          <Article
            imageUrl={blog03}
            date='Jan 26, 2022'
            title='GPT-3 and OpenAI os the future. Let us explore how it is?'
          />
          <Article
            imageUrl={blog04}
            date='Jan 26, 2022'
            title='GPT-3 and OpenAI os the future. Let us explore how it is?'
          />
          <Article
            imageUrl={blog05}
            date='Jan 26, 2022'
            title='GPT-3 and OpenAI os the future. Let us explore how it is?'
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
