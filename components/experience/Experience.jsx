import React from "react";
import "./experience.css";
import ListExperience from "./components/listExperience";
import { GiMedal } from "react-icons/gi";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>Hello, Here are my skills</h5>
      <h2>My Experience</h2>

      <div className="experience">
        <div className="container experience__container exp">
          <h3>Frontend Developement</h3>
          <div className="experience__frontend">
            <div className="experience__content">
              <article className="experience__detials">
                <GiMedal />
                <h4>HTML</h4>
                <small className="text-light">EXPERIENCED</small>
              </article>
            </div>
          </div>
          <div className="experience__content">
            <div className="experience__frontend">
              <article className="experience__detials">
                <GiMedal />
                <h4>CSS</h4>
                <small className="text-light">BEGINNER</small>
              </article>
            </div>
          </div>
          <div className="experience__content">
            <div className="experience__frontend">
              <article className="experience__detials">
                <GiMedal />
                <h4>JAVASCRIPT</h4>
                <small className="text-light">BEGINNER</small>
              </article>
            </div>
          </div>
        </div>
  
      </div>
      <div className="experience">
        <div className="container experience__container exp">
          <h3>Backend Developement</h3>
          <div className="experience__content">
            <div className="experience__backend">
              <article className="experience__details">
                <GiMedal />
                <h4>PYTHON</h4>
                <small className="text-light">EXPERIENCED</small>
              </article>
            </div>
          </div>
          <div className="experience__content">
            <div className="experience__backend">
              <article className="experience__details">
                <GiMedal />
                <h4>NODE</h4>
                <small className="text-light">BEGINNER</small>
              </article>
            </div>
          </div>
          <div className="experience__content">
            <div className="experience__backend">
              <article className="experience__detials">
                <GiMedal />
                <h4>SQL</h4>
                <small className="text-light">BEGINNER</small>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
