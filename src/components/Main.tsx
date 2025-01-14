import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Main.scss';
import avatar_circle from '../assets/images/1.jpeg';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={avatar_circle} alt="Avatar"/>
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/hnfdm" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/hanifdamarjati20/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
			      <a href="mailto:hanif.damarjati20@gmail.com" target="_blank" rel="noreferrer"><EmailIcon/></a>
          </div>
          <h1>Hanif Damarjati</h1>
          <p>Junior Programmer & Analyst</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
