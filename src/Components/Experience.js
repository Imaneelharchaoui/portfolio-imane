import React from "react";
import "./../index.css";
import { motion } from "framer-motion";
import * as AOS from "aos";

const boxVariants = {
  hover: {
    scale: 1.06,
    transition: {
      type: "spring",
    },
  },
};

const Experience = () => {
  return (
      <section
          id="experience"
          className="portfolio-container"
          name="portfolio"

      >
        <h>Experience</h>
        <div className="projects-container">

          <motion.div
              className="projects" data-aos="fade-right"
              variants={boxVariants}
              whileHover="hover"
          >
            <a
                rel="noopener noreferrer"
                target="_blank"

            >
              <div > <img src="nokia.png"></img></div>
            </a>

            <div className="project-links">
              <strong><h6 className="font-weight-bolder">
                Software Engineer
                <span className="font-weight-light"
                >&nbsp;|&nbsp;July_2020 &ndash; sept_2020
              </span>
              </h6></strong>
              <div className="text">


                <p>

                  Development of a web application for Resources
                  and Cost Management that facilitate managing
                  projects.</p>


              </div>


            </div>
          </motion.div>


          {/* Project 2 - Shoe Store */}
          <motion.div data-aos="fade-left"
              variants={boxVariants}
              whileHover="hover"
              className="projects"
          >
            <a
                rel="noopener noreferrer"
                target="_blank"

            >
              <div > <img src="imageepsy.png"></img></div>
            </a>

            <div className="project-links">
              <strong><h6 className="font-weight-bolder">
                Developer
                <span className="font-weight-light"
                >&nbsp;|&nbsp;July_2019 &ndash; august_2019
              </span>
              </h6></strong>
              <div className="text">
                <p>Developing a mobile application that helps in
                  managing the consultation of commercial
                  activities indicators. </p>
              </div>
            </div>
          </motion.div></div>

      </section>
  );
};

export default Experience;
