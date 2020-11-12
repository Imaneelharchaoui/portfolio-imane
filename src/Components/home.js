import React, { useState, useEffect } from "react";
import "./../index.css";

import { motion, AnimatePresence } from "framer-motion";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faFacebook} from "@fortawesome/free-brands-svg-icons/faFacebook";

const contentVariants = {
    initial: {
        translateY: "100vh",
        opacity: 0,
    },

    animate: {
        translateY: "0vh",
        opacity: 1,
        transition: {
            duration: 2,
            when: "beforeChildren",
            // staggerChildren: 0.4,
        },
    },
};

const childrenVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },

    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            type: "spring",
            delay: 0.5,
        },
    },

    exit: {
        opacity: 0,
        y: -200,
        transition: { duration: 0.2 },
    },
};

const Home = () => {
    // State
    const [showHeadingOne, setShowHeadingOne] = useState(true);
    const [showHeadingTwo, setShowHeadingTwo] = useState(false);

    // Timeout
    useEffect(() => {
        setTimeout(() => {
            if (showHeadingOne) {
                setShowHeadingOne(false);
                setShowHeadingTwo(true);
            } else {
                setShowHeadingOne(true);
                setShowHeadingTwo(false);
            }
        }, 3000);
    }, [showHeadingOne, showHeadingTwo]);

    return (
        <section  className="skills-container" id="about">

            <img className="center" src="logoimane.PNG"/>
            <div className="imane">
                <h2>welcome to my website !</h2>
            </div>
            <motion.div
                // className="content-container"
                variants={contentVariants}
                initial="initial"
                animate="animate"
            >

                <br />
                <h className="main-content">
                    I’m Imane Elharchaoui
                    <motion.span
                        drag={true}
                        //dragConstraints={{ left: 0, top: 0, bottom: 0, right: 0 }}
                        // className="hand"
                        // animate={{ rotate: [0, 20, 0, 20, 0, 0, 0, 0, 0, 0] }}
                        // transition={{ yoyo: Infinity, duration: 1.7 }}
                    >

                    </motion.span>{" "}
                </h>
                <div/>
                {/* Animate Skill Content */}

                <div className="skill-animation">
                    <AnimatePresence>
                        {showHeadingOne && (
                            <motion.h2
                                className="skill-content"
                                variants={childrenVariants}
                                exit="exit"
                                animate="animate"
                                initial="initial"
                            >
                                Web & Mobile | Developer
                            </motion.h2>
                        )}
                    </AnimatePresence>

                    <AnimatePresence>
                        {showHeadingTwo && (
                            <motion.h2
                                className="skill-content"
                                variants={childrenVariants}
                                exit="exit"
                                animate="animate"
                                initial="initial"
                            >
                                Front-End | Back-end
                            </motion.h2>

                        )}
                    </AnimatePresence>



                </div>


                {/* // */}




            </motion.div>




            <div><div className="social-icons1">
                <a  href= "https://www.linkedin.com/in/imane-elharchaoui-0b839b17b/">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/Imaneelharchaoui">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.facebook.com/imane.elharchaoui.5/" >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>


            </div>
                <div/>

                <div></div>
                <div className="subheading mb-5">

                </div>
                <div className="subheading mb-5">

                </div>
                <div className="subheading mb-5">

                </div>
                <div>   <a href="Imaneelharchaoui-RESUME.pdf" display><button   className="btn third">Resume</button> </a></div>
            </div>



            <h1>About</h1><br/>
            <div className="display">
                <div>
                </div>
                <div className="editor">

                    <div className="text-bio">
                        <p> Im a Web and Mobile Development engineering student at ENSIAS (National School of Computer
                            science).
                            I love building things !,and i really appreciate teamwork. Im currently looking for a
                            end-of-studies
                            internship where i can contribute to a challenging project and gain more Experience.
                        </p>
                    </div>
                </div>
            </div>



        </section>
    );
};

export default Home;
