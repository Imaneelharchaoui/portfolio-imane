import React from "react";
import "./../index.css";
import * as AOS from "aos";
AOS.init({
  duration: 1000
});
const Skills = () => {
  return (
      <section
          data-aos="fade-right"
          className="skills-container"
          name="skills"
          id="skills"
      >
        <h>SKILLS</h>

        <div className="techs">

          <li>
            <img src="angular.png"></img>
            <h6>angular</h6>
          </li>

          <li>
            <i className="fas fa-leaf"></i>
            <h6>spring boot</h6>
          </li>
          <li>
            <i className="fab java fa-java"></i>
            <h6>Java</h6>
          </li>
          <li>
            <i className="fab javascript fa-js"></i>
            <h6>Javascript</h6>
          </li>
          <li>
            <i className="fab html fa-html5"></i> <h6>HTML5</h6>
          </li>
          <li>
            <i className="fab css fa-css3"></i>
            <h6>CSS3</h6>
          </li>

          <li>
            <i className="fab bootstrap fa-bootstrap"></i>
            <h6>Bootstrap</h6>
          </li>

          <li>
            <i className="fab react fa-react"></i>
            <h6>React</h6>
          </li>

          <li>
            <i className="fab typescript fa-react"></i>
            <h6>Typescript</h6>
          </li>
          <li>
            <img src="mysql.png"></img>
            <h6>mySQL</h6>
          </li>

          <li>
            <img src="git.png"></img>
            <h6>Git</h6>
          </li>


        </div>
      </section>
  );
};

export default Skills;
