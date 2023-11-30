import "./projects.css";
import portfolioData from "/src/data/portfolioData.json"

function Projects() {
  return (
    <section id="projects"> 
    <div className="projects-container">
      <h1>.myProjects</h1>

      <div className="portfolio-container">
        {
          portfolioData.map(({id, image, title, description, github, live}) => {
          return (
          <article  key={id} className="">
            <div className="">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="">
              <a
                href={github}
                className="button"
              >
                GitHub
              </a>
              <a
                href={live}
                className="button"
                target="_blank"
                rel="noreferrer"
              >
                Live
              </a>
            </div>
            </article>
          )
        })
        }
      </div>

    </div>
    </section>
  )
}

export default Projects;