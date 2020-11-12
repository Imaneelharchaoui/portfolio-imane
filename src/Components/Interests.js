import React from "react";



const Interests = () => {
  return (
      <section
          data-aos="fade-right"
          className="skills-container"
          name="skills"
          id="interests"
      >
        <h data-aos="zoom-out">Interests</h>

        <div className="techs">

          <li>
            <i className="fas fa-music"></i>
            <h6>music</h6>
          </li>
          <li>
            <i className="fas fa-book-open"></i>
            <h6>books</h6>
          </li>
          <li>
            <i className="fas fa-running"></i>
            <h6>sport</h6>
          </li>
          <li>
            <i className="fas fa-file-video"></i>
            <h6>cinema</h6>
          </li>
          <li>
            <i className="fas fa-hand-holding-heart"></i><h6>Helping others</h6>
          </li>
          <li>
             <i className="fas fa-gamepad"></i>
            <h6>games</h6>
          </li>




        </div>

      </section>
  );
};
export default Interests;
