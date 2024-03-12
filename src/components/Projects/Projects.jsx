import "./projects.css";
import { useEffect } from "react";
import portfolioData from "/src/data/portfolioData.json";
import Carousel from "react-bootstrap/Carousel";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="projects">
      <div className="projects-container">
        <h1>.myProjects</h1>

        <div className="portfolio-container">
          {portfolioData.map(
            ({ id, images, title, description, github, live }) => {
              return (
                <article
                  key={id}
                  className="project-card"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <div className="card-container">
                    <Carousel>
                      {images.map((image, index) => (
                        <Carousel.Item key={index} interval={6000}>
                          <img
                            src={image}
                            className="d-block w-100 img-carousel"
                            alt={`Slide ${index + 1}`}
                          />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-description">{description}</p>
                  </div>

                  <div className="card-buttons">
                    <a href={github} className="card-button">
                      GitHub
                    </a>
                    <a
                      href={live}
                      className="card-button"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  </div>
                </article>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
