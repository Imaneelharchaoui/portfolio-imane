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

const Portfolio = () => {
  return (
    <section
        data-aos="zoom-in"
      className="portfolio-container"
      name="portfolio"
      id="portfolio"
    >
      <h>Projects</h>
      <div className="projects-container">

        <motion.div
          className="projects"
          variants={boxVariants}
          whileHover="hover"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"

          >
            <div className="project-images" id="Sudoku"></div>
          </a>

          <div className="project-links">
            <strong>Sudoku game for kids :</strong>
            <div className="text">


              <p>

                program in
                C, and with a decent graphical interface, a sudoku game for children.</p>







            </div>
            <div className="icons">

              <div className="Project-card-language">
              <span className="language-tag">
               C
              </span>
                <span className="language-tag">
               Sdl
              </span>


              </div>

            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Imaneelharchaoui/Sudoku_Game"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>

            </div>
          </div>
        </motion.div>


        {/* Project 2 - Shoe Store */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"

          >
            <div className="project-images" id="Web"></div>
          </a>

          <div className="project-links">
            <strong>animals adoption and donations :</strong>
            <div className="text">
              <p>A web app that facilitate the adoption procedure and i the care offers that can be offered by different veterinarians of
                the E-PAW platform </p>

            </div>
            <div class="icons">
              <div className="Project-card-language">
              <span className="language-tag">
               Java
              </span>
                <span className="language-tag">
               Bootstrap
              </span>
                <span className="language-tag">
               MySQL
              </span>


              </div>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Imaneelharchaoui/EPAW"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>

            </div>
          </div>
        </motion.div>

        {/* Project 3 - Quiz App */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"

          >
            <div className="project-images" id="application"></div>
          </a>
          <div className="project-links">
            <strong>absence management application:</strong>
            <div className="text">
              <p>
                a fast and efficient way that
                allows to manage informations concerning absences, and supporting documents.</p>


            </div>
            <div class="icons">
              <div className="Project-card-language">
              <span className="language-tag">
               Php
              </span>
                <span className="language-tag">
               Css
              </span>
                <span className="language-tag">
               MySQL
              </span>


              </div>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                // href="https://github.com/developer-junaid/Quiz-Application"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>

            </div>
          </div>
        </motion.div>

        {/* Project 4 - Explore matiari */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"

          >
            <div className="project-images" id="Management"></div>
          </a>
          <div className="project-links">
            <strong>Resources and Cost Management :</strong>
            <div className="text">
              <p> Development of a web application for Resources
                and Cost Management that facilitate managing
                projects. </p>

            </div>
            <div class="icons">
              <div className="Project-card-language">
              <span className="language-tag">
               SpringBoot
              </span>
                <span className="language-tag">
               React
              </span>
                <span className="language-tag">
               MySQL
              </span>


              </div>
            </div>
            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Imaneelharchaoui/Rsources-and-Cost-Management-App"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>

            </div>
          </div>
        </motion.div>

        {/* Project 5 - Expense Tracker */}
        <motion.div
          variants={boxVariants}
          whileHover="hover"
          className="projects"
        >
          <a
            rel="noopener noreferrer"
            target="_blank"

          >
            <div className="project-images" id="Indicators"></div>
          </a>
          <div className="project-links">
            <strong>Commercial activities indicators:</strong>
            <div className="text">
              <p>
                collect information concerning a commercial activity,and generate its indicators
                and make them immediately available and searchable by the user  </p>

            </div>
            <div class="icons">
              <div className="Project-card-language">
              <span className="language-tag">
               Java
              </span>
                <span className="language-tag">
              Android Studio
              </span>
              </div>
            </div>

            <div className="icons">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/Imaneelharchaoui/Android-App--"
              >
                <i className="fab fa-github" title="github repo" id="github">
                  {" "}
                </i>
              </a>

            </div>
          </div>
        </motion.div>
      </div>
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://github.com/Imaneelharchaoui"
        className="button-link"
      >
        <button className="button">More Projects</button>
      </a>
    </section>
  );
};

export default Portfolio;
