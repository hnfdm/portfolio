import React from "react";
import mock14 from '../assets/images/mock14.png';
import mock15 from '../assets/images/mock15.png';
import mock16 from '../assets/images/mock16.png';
import mock17 from '../assets/images/mock17.png';
import mock18 from '../assets/images/mock18.png';
import mock19 from '../assets/images/mock19.png';
import mock20 from '../assets/images/mock20.png';
import mock23 from '../assets/images/mock23.png';
import mock24 from '../assets/images/mock24.png';

import ascrain from '../assets/images/ascrain.png';
import ascapp from '../assets/images/ascapp.png';
import ascwgen from '../assets/images/ascwgen.png';
import ascofc from '../assets/images/ascofc.png';

import '../assets/styles/Project.scss';
/* eslint-disable jsx-a11y/anchor-is-valid */

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={ascofc} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.airdropasc.com/" target="_blank" rel="noreferrer"><h2>Airdrop ASC Official Website</h2></a>
                <p>Designed, developed, and launched a Offical Website of Airdrop ASC. This project leveraged by React, Vercel & Namecheap.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={ascwgen} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ascwallet_ascairdropasc.ar.io/" target="_blank" rel="noreferrer"><h2>Crypto Wallet Generator</h2></a>
                <p>Designed, developed, and launched a Crypto Wallet Generator for Generate Private Key of Ethereum & Solana. This project leveraged by Vite, React & TypeScript</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={ascapp} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ascapp_ascairdropasc.ar.io/" target="_blank" rel="noreferrer"><h2>Top 100 Crypto Market Cap</h2></a>
                <p>Designed, developed, and launched a Crypto App for Displaying Top 100 Crypto Market Cap using Coingecko API. This project leveraged by React, Axios, Bootstrap & SweetAlert2.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={ascrain} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://asc_ascairdropasc.ar.io/" target="_blank" rel="noreferrer"><h2>Simple Raindrop Landing Page</h2></a>
                <p>Build for Test Deployment on Arlink using ARIO Domain Name System by AO. This project leveraged by Vue 3 & Vite.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={mock24} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/hnfdm/surya-rent-car-web" target="_blank" rel="noreferrer"><h2>Surya Rent Car</h2></a>
                <p>Designed, developed, and launched a Rent Car Web App. This project leveraged by HTML, CSS & JavaScript & MySQL.</p>
            </div>
			<div className="project">
                <a target="_blank" rel="noreferrer"><img src={mock23} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/hnfdm/libraries-app" target="_blank" rel="noreferrer"><h2>Libraries App</h2></a>
                <p>Designed, developed, and launched a Library Application System based on dekstop using MVC concept. This project leveraged by C#, Visual Studio & SQL Server.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={mock20} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://docs.google.com/presentation/d/1WBKOzG_lmRGdK43FURaq8a8c3AmORMPz/edit?usp=sharing&ouid=107065202711653108814&rtpof=true&sd=true" target="_blank" rel="noreferrer"><h2>Go Galon & Gas</h2></a>
                <p>Developed & designed of a mobile application based gallon and gas purchase management information system using Java & SQL Lite..</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={mock19} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://docs.google.com/presentation/d/1k9x6GhUS5pHZoz19R7MF2iP1PKU7k35rIyfTAYIcFUA/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Pesona Sleman</h2></a>
                <p>Developed & designed sleman regency tourism geographic information system based on android using Adobe Xd.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={mock18} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://docs.google.com/presentation/d/1G0jUb-lNa7U4i4r39DnZD8mMzq3xWcCnrr3v7s8D1uU/edit?usp=sharing" target="_blank" rel="noreferrer"><h2>Sentiment Analysis using the K-Means Algorithm</h2></a>
                <p>Analyzed and visualized of application sentiment result to classify positive and negative opinions of popular mobile applications based on reviews on the Play Store using Data Mining technique.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={mock17} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/hnfdm/analysis-visualisation-of-dataset" target="_blank" rel="noreferrer"><h2>Analysis & Visualisation of Dataset</h2></a>
                <p>Analyzed & visualized few interesting point from Netlix movie & tv shows dataset by implementing simple data mining technique such as cleaning & clustering. This project leveraged by MongoDB & Jupyter Notebook.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={mock14} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/hnfdm/Simple-Chess-Minimax" target="_blank" rel="noreferrer"><h2>Simple Chess with AI</h2></a>
                <p>Implementation of The Minimax Algorithm for Artifical Intelegence in Simple Chess Games web based.</p>
            </div>
            <div className="project">
                <a href="https://medicalveda.com/" target="_blank" rel="noreferrer"><img src={mock16} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/hnfdm/MVEDA-ERC20" target="_blank" rel="noreferrer"><h2>MVEDA ERC20</h2></a>
                <p>Built official ERC20 token on the Ethereum network, with standard features like token transfer, balance checking, and total supply control.</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><img src={mock15} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/hnfdm/hanumanjump" target="_blank" rel="noreferrer"><h2>Hanuman Jump</h2></a>
                <p>Designed and developed an Android mobile application using Consruct 2 that runs a 2D one-button game.</p>
            </div>	
        </div>
    </div>
    );
}

export default Project;
