import "./projects.css";
import portfolioData from "/src/data/portfolioData.json";
/* import {Carousel} from 'react-bootstrap/Carousel'; */

function Projects() {
  return (
    <section id="projects"> 
    <div className="projects-container">
      <h1>.myProjects</h1>

      <div className="portfolio-container">
        {
          portfolioData.map(({id, image, title, description, github, live}) => {
          return (
          <article  key={id} className="project-card">
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





   {/*  <Carousel>
      <Carousel.Item interval={1000}>
        <img  src="https://imgs.search.brave.com/v3rLiBtnUWBypRz7hgO0PocPXU5xTMtb7z1aTW5JSTw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90b3MtZ3JhdGlz/L2xpbmRvcy1nYXRp/bmhvcy1jb20tZmxv/cmVzLWFvLWFyLWxp/dnJlXzIzLTIxNTA3/NTI3NzQuanBnP3Np/emU9NjI2JmV4dD1q/cGc" className="d-block w-100" alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img  src="https://imgs.search.brave.com/lCRMLnlmM-aPPEDe-5HY_eQFZb0Zw14rZCeALUlEv5A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/NS8zMC8xOS8yOS9r/aXR0ZW4tMzQ0MjI1/N182NDAuanBn" className="d-block w-100" alt="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  src="https://imgs.search.brave.com/poIfnKZN8QW2o11Flc0dKzWlaw7brTUx4cwENLINaJI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDIu/ZGVwb3NpdHBob3Rv/cy5jb20vMTU5MDUw/MS80ODAyMS9pLzYw/MC9kZXBvc2l0cGhv/dG9zXzQ4MDIxNTA5/OC1zdG9jay1waG90/by1hZG9yYWJsZS1j/dXJpb3VzLWxpdHRs/ZS10YWJieS1raXR0/ZW4uanBn" className="d-block w-100" alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}

    
    </section>
  )
}

export default Projects;