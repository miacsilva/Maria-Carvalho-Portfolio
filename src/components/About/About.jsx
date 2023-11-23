import "./about.css"; 
import maria from "/maria-portrait.PNG"

function About() {
  return (
    <section id="about"> 
    <h1>Get to know me!</h1>

<div className="about-content">
    <div className="about-text">
      <h3>
        I'm Júnior Full-Stack Web Developer from Braga, Portugal. 
        My academic background is in Sociology where I learned to integrate in my life very interesting lens apon the world.
        But something was missing, I felt like I needed to be able to create and be creative in a field I've always loved and felt is so relevant: Tech. 
        My life changed when I engaged in a intensive Javascript Full-Stack Web Development Bootcamp and gained the tools to create big and beautiful things!
      </h3>
    </div>
    <img src={maria} alt="Maria Carvalho's portrait" className="portrait"/>
    </div>
    </section>
  )
}

export default About