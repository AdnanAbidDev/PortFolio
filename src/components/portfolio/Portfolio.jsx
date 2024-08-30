import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./portfolio.css";
import { projects } from "./portfoliodata";

const Portfolio = () => {
  // State to control modal visibility and content
  const [isOpen, setIsOpen] = useState(false);
  const [imagesForCarousel, setImagesForCarousel] = useState([]);

  const openModal = (images) => {
    setImagesForCarousel(images); // Set the images to be displayed in the carousel
    setIsOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsOpen(false); // Close the modal
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {projects.map((project) => (
          <article className="portfolio__item" key={project.title}>
            <div className="portfolio__item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="portfolio__details">
              <h3>{project.title}</h3>
              <div className="portfolio__tagparent">
                {project.features.map((feature, index) => (
                  <div key={index} className="portfolio__tags">
                    {feature}
                  </div>
                ))}
              </div>
              <div className="portfolio__item-cta">
                {project.collage ? (
                  <a
                    className="btn btn-primary"
                    onClick={() => openModal(project.collage)}
                  >
                    View Images
                  </a>
                ) : (
                  <>
                    {project.github && (
                      <a
                        href={project.github}
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <Popup open={isOpen} closeOnDocumentClick onClose={closeModal}>
        <Carousel>
          {imagesForCarousel.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Slide ${index}`} />
            </div>
          ))}
        </Carousel>
        <button className="btn" onClick={closeModal}>
          Close
        </button>
      </Popup>
    </section>
  );
};

export default Portfolio;
