import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">About</h1>
      <div className="about__body">
        <ul>
          <li>
            Simply Pick a state and month to generate a list of in-season
            produce.
          </li>
          <li>Choose the ingredient that interests you.</li>
          <li>Scroll through the recipes that include your ingredient.</li>
          <li>
            Click the "Get Recipe" button to navigate to the instructions for
            the dish you picked.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default About;
