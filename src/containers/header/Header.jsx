import React, { lazy, Suspense } from "react";
import "./header.css";
import people from "../../assets/people.png";
import Loading from "../../components/loading/Loading";
const LazyHeader = lazy(() => import("./LazyHeader.jsx"));

const Header = () => {
  return (
    <div className='gpt3--header section--padding' id='home'>
      <div className='gpt3--header-content'>
        <h1 className='gradient--text'>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <div className='gpt3--header-content-input'>
          <input type='email' placeholder='Your email address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3--header-content-people'>
          <img src={people} alt='People Images' />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <Suspense fallback={<Loading />}>
        <LazyHeader />
      </Suspense>
    </div>
  );
};

export default Header;
