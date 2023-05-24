import React from "react";
import "./About";
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
            <img src="{ME}" alt="About-image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <FaAward className="about__icon"></FaAward>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <FiUsers className="about__icon"></FiUsers>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about_card">
              <VscFolderLibrary className="about__icon"></VscFolderLibrary>
              <h5>Projects</h5>
              <small>8+ Projects completed</small>
            </article>

            <article className="about_card">
              <FiUsers className="about__icon"></FiUsers>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            vitae recusandae cupiditate impedit saepe, voluptate nisi vel quam
            sapiente ab, commodi sint distinctio dolore voluptatum deleniti vero
            eum tempore facilis.
          </p>

          <a href=""></a>
        </div>
      </div>
    </section>
  );
};

export default About;
