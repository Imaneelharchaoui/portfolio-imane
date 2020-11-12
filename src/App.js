import React, { Component } from 'react';
import Sidebar from './Components/Sidebar';
import Skills from './Components/Skills';
import Interests from './Components/Interests';
import profileData from './profileData.json';
import ReactGA from 'react-ga';
import Portfolio from "./Components/Portfolio";
import './index.css';
import './inds.scss';
import ContactUs from './Components/contactForm';
import QuoteGenerator from './Components/QuoteGenerator';
import Experience from "./Components/Experience";
import Home from "./Components/home";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      landingData : profileData.landing,
      experience : profileData.experience,
      education : profileData.education,
      skills : profileData.skills,
      interests : profileData.interests,
      extracurricular : profileData.extracurricular,
      portfolio: profileData.portfolio


  

    };

    ReactGA.initialize('UA-158818625-1');
    ReactGA.pageview(window.location.pathname);
  }
  render() {

    return (

      <div className="App">

        <Sidebar sidebarData={this.state.landingData} />
        <div className="container-fluid p-0">

          <Home/>
          {/*<Landing landingData={this.state.landingData} />*/}
          <hr className="m-0" />
          <Experience/>
          {/*<hr className="m-0" />*/}
          {/*<Experience experience={this.state.experience} />*/}
          <hr className="m-0" />
          <Portfolio  portfolio={this.state.portfolio}/>
          <hr className="m-0" />
          <Skills skills={this.state.skills} />
          <hr className="m-0" />
          <Interests interests={this.state.interests} />
          <div id="quote-box"/>
          <div >
          <QuoteGenerator />
          </div>
          <hr className="m-0" />
          <div>
            <ContactUs/>
          </div>



          {/*<hr className="m-0" />*/}
          {/*<Extracurricular extracurricular={this.state.extracurricular} />*/}








        </div>



      </div>


    );

  }

}

export default App;
