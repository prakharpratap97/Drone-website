import React from 'react';
import './About.css';
import droneimage from './Images/Drone flying.webp';

const About = () => {
  
  return (
    <>
    <div className="about-container">
      <div className="about-card">
        <div className="about-card-header" >
          <h1>About Us</h1>
          
        </div>
        <div className='about-card-body'>
          <div className="about-text">
            <p>
              We are a team of innovative thinkers who are passionate about using technology to solve problems and improve people's lives. Our company was founded in 2020 with the goal of creating cutting-edge software and hardware solutions for a wide range of clients.
            </p>
            <p>
              We are committed to staying at the forefront of our industry by investing in research and development, and by fostering a culture of continuous learning and improvement. Our goal is to build long-lasting partnerships with our clients based on trust, mutual respect, and a shared vision for the future.
            </p>
          </div>
          <div className="Turnkey-image">
            <img src={droneimage} alt="droneimage" />
          </div>
        </div>
      </div>
    </div>
    <div className="Turnkey-container">
      <div className="Turnkey-card">
        <div className="Turnkey-card-header" >
          <h1>Turnkey Us</h1>
          
        </div>
        <div className={`Turnkey-card-body `}>
          <div className="Turnkey-text">
            <p>
              We are a team of innovative thinkers who are passionate Turnkey using technology to solve problems and improve people's lives. Our company was founded in 2020 with the goal of creating cutting-edge software and hardware solutions for a wide range of clients.
            </p>
            <p>
              We are committed to staying at the forefront of our industry by investing in research and development, and by fostering a culture of continuous learning and improvement. Our goal is to build long-lasting partnerships with our clients based on trust, mutual respect, and a shared vision for the future.
            </p>
          </div>
          <div className="Turnkey-image">
            <img src={droneimage} alt="droneimage" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
