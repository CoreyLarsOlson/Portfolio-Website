import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Netflix Clone",
    github: "https://github.com/CoreyLarsOlson/Netflix-clone",
    demo: "",
  },
  {
    id: 2,
    image: IMG2,
    title: "Calculator",
    github: "https://github.com/CoreyLarsOlson/Calculator",
    demo: "",
  },
  {
    id: 1,
    image: IMG3,
    title: "Finance Tracker",
    github: "https://github.com/CoreyLarsOlson/ExpenseTracker",
    demo: "",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
          <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio_item-cta">
              <a href={github} className="btn" target="_blank">
                Github
              </a>
            </div>
          </article>
          )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
