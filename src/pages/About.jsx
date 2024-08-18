import React, { useState, useEffect } from "react";
import "../App.css";
import img1 from "../images/caricature-dimitri.svg";
import img2 from "../images/caricature-mathilde.svg";
import img3 from "../images/caricature-quentin_b.svg";
import img4 from "../images/adarsh.jpg"; // Add a fourth team member image
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const teamMembers = [
  {
    name: "CLIAR BROWN",
    position: "CEO",
    image: img1,
    instagram: "https://www.instagram.com/cliardbrown",
    linkedin: "https://www.linkedin.com/in/cliardbrown",
    twitter: "https://twitter.com/cliardbrown",
    details:
      "CLIAR BROWN is the CEO with extensive experience in leading tech companies and driving innovation.",
  },
  {
    name: "ADMA FINCH",
    position: "CTO",
    image: img2,
    instagram: "https://www.instagram.com/admafinch",
    linkedin: "https://www.linkedin.com/in/admafinch",
    twitter: "https://twitter.com/admafinch",
    details:
      "ADMA FINCH is the CTO specializing in cutting-edge technology and software development.",
  },
  {
    name: "JHON REYSE",
    position: "CFO",
    image: img3,
    instagram: "https://www.instagram.com/jhonreyse",
    linkedin: "https://www.linkedin.com/in/jhonreyse",
    twitter: "https://twitter.com/jhonreyse",
    details:
      "JHON REYSE is the CFO with a strong background in financial planning and management.",
  },
  {
    name: "LUCAS MARTIN",
    position: "COO",
    image: img4,
    instagram: "https://www.instagram.com/lucasmartin",
    linkedin: "https://www.linkedin.com/in/lucasmartin",
    twitter: "https://twitter.com/lucasmartin",
    details:
      "LUCAS MARTIN is the COO, focusing on operational efficiency and strategic growth.",
  },
];

function About() {
  useEffect(() => {
    setVisible(true);
  }, []);

  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <div id="pageTitle">
        <p>OUR TEAM</p>
      </div>
      <div className={`columns ${visible ? "fadeIn" : "fadeOut"}`}>
        {teamMembers.map((member, index) => (
          <div key={index} className="teamCard">
            <img src={member.image} alt={member.name} className="teamImage" />
            <div className="teamContent">
              <p id="teamTitle">{member.name}</p>
              <p id="teamPos">{member.position}</p>
              <p id="teamDetails">{member.details}</p>
              <div className="socialMedia">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
