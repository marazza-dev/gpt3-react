import React, { lazy, Suspense } from "react";
import "./possibility.css";
import Loading from "../../components/loading/Loading";

const LazyPossibility = lazy(() => import("./LazyPossibility.jsx"));

const Possibility = () => {
  return (
    <div className='gpt3--possibility section--padding' id='possibility'>
      <Suspense fallback={<Loading />}>
        <LazyPossibility />
      </Suspense>
      <div className='gpt3--possibility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient--text'>
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allowa
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
