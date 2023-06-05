import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About__image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"></FaAward>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"></FiUsers>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"></VscFolderLibrary>
              <h5>Projects</h5>
              <small>8+ Projects completed</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"></FiUsers>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
          </div>
          <p>
            I am a software engineering student in the University of Buea.
            Currently learning the most recent technologies to keep my self
            updated. I can offer you my skills with the assureance that the job
            will be done on time and with the best results you can get. You can
            view my{" "}
            <a href="#services">
              <strong>skills</strong>
            </a>
            ,{" "}
            <a href="#experience">
              <strong> experiences </strong>
            </a>

            and
            <a href="#portfolio">
              {" "}
              <strong>portfolio</strong>
            </a>{" "}
            in this page.
          </p>

          <a href=""></a>
        </div>
      </div>
    </section>
  );
};

export default About;
