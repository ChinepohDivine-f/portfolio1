import React from "react";
import "./experience.css";
import {BsPatchCheckFill} from 'react-icons/bs'

const Expenrience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have </h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light"></small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className="text-light"></small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className="text-light"></small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JAVA</h4>
              <small className="text-light"></small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>REACT</h4>
              <small className="text-light"></small>
            </article>
          </div>
          END OF FRONT END
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>PYTHON</h4>
              <small className="text-light"></small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>MONGO</h4>
              <small className="text-light"></small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>JAVASCRIPT</h4>
              <small className="text-light"></small>
            </article>

    
          </div>
          END OF BACKEND
        </div>
        <div className="experience__backend"></div>
      </div>
    </section>
  );
};

export default Expenrience;
