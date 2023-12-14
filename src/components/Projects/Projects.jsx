import "./projects.css";
import portfolioData from "/src/data/portfolioData.json";
import Carousel from "react-bootstrap/Carousel";

function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        <h1>.myProjects</h1>

        <div className="portfolio-container">
          {portfolioData.map(
            ({ id, images, title, description, github, live }) => {
           
              return (
                <article key={id} className="project-card">
                  <div className="">
                  <Carousel>
                    {images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img
                          src={image}
                          className="d-block w-100 img-carousel"
                          alt={`Slide ${index + 1}`}
                        />
                    {/*     <Carousel.Caption>
                          <h3>{`Slide ${index + 1} label`}</h3>
                        </Carousel.Caption> */}
                      </Carousel.Item>
                    ))}
                  </Carousel>
                  </div>
                  <h3 className="card-title">{title}</h3>
                  <p  className="card-description">{description}</p>
                  <div className="">
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
