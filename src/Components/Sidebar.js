import React, { Component } from 'react';
import image from '../Assets/profile.jpg';
import {animateScroll as scroll} from "react-scroll";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.sidebarData = props.sidebarData;
  }


  render() {

    return (

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">

        {/*<div id='stars'></div>*/}
        {/*<div id='stars2'></div>*/}
        {/*<div id='stars3'></div>*/}
        <a className="navbar-brand js-scroll-trigger" href="#page-top">


          <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt=""></img>



          </span>
          <span className="logo" onClick={() => scroll.scrollToTop()}>

      </span>

        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>
        <div   className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav">

            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
            </li>
            {/*<li className="nav-item">*/}
            {/*  <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>*/}
            {/*</li>*/}
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a>
            </li>
            {/*<li className="nav-item">*/}
            {/*  <a className="nav-link js-scroll-trigger" href="#education">Education</a>*/}
            {/*</li>*/}
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#Contactme">Contact me</a>
            </li>
            {/*<li className="nav-item">*/}
            {/*  <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>*/}
            {/*</li>*/}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
