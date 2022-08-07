import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FiAward } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { BiFolderOpen } from "react-icons/bi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Imager"></img>
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FiAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ years experience</small>
            </article>

            <article className="about_card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>Worldwide</small>
            </article>

            <article className="about_card">
              <BiFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            amet quam unde enim, qui ullam accusamus tempora voluptatum fugiat
            aut aliquid nulla delectus natus laborum debitis aperiam ipsa
            voluptates velit.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
