import React from "react";
import "./experience.css";
import ListExperience from "./components/listExperience";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>Hello, Here are my skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <ListExperience />
      </div>
    </section>
  );
};
export default Experience;
