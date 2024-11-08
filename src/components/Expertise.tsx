import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuffer, faUncharted, faEmpire} from '@fortawesome/free-brands-svg-icons';
//import { faUser } from "@fortawesome/free-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C++",
    "C#",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Java",
    "PHP",
    "Python",
    "TypeScript",
    "Solidity"
];

const labelsSecond = [
    "MySQL",
	"MongoDB",
	"SQL Server",
	"Oracle",
	"Google Cloud",
];

const labelsThird = [
    "Tableau",
	"R",
	"Power BI",
	"ChatGPT",
	"Blockchain",
    "TradingView",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faEmpire as IconProp} size="3x"/>
                    <h3>Programming</h3>
                    <p>I have built several beta applications from scratch using modern technologies. As a junior developer, I am actively learning and applying the SDLC process, and I have a solid foundation in both frontend and backend development. I am also familiar with OOP principles and have experience implementing the MVC architecture to organize code efficiently and improve maintainability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBuffer as IconProp} size="3x"/>
                    <h3>Database</h3>
                    <p>I manage databases with a focus on setup, data integrity, and query optimization. My skills include schema design, backup/recovery, basic security, and monitoring. I was also collaborate with development teams to support efficient database integration.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faUncharted as IconProp} size="3x"/>
                    <h3>Analyst</h3>
                    <p>I have foundational skills in data collection, cleaning, and analysis using SQL and Google Sheet, along with creating visualizations in Tableau. I apply basic statistical methods to interpret data trends and collaborate with teams to communicate insights that support decision-making.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;