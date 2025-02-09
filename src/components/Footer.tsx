import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/hnfdm" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/hanifdamarjati20/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
		    <a href="mailto:hnfdm@proton.me" target="_blank" rel="noreferrer"><EmailIcon/></a>
      </div>
      <p>Portfolio redesigned & rebuilt by Hanif Damarjati with ♡</p>
    </footer>
  );
}

export default Footer;
