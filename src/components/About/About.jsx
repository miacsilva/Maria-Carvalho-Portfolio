import "./about.css"; 
import maria from "/src/assets/maria-portrait.png"
import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"


function About() {
  useEffect(()=>{
    Aos.init()
      },[])

  return (
    <section id="about"> 
<div className="content-about">
    <h1>.getToKnowMe</h1>
<div className="about-content">
    <div className="about-text">

      <h3>
        >>My name is Maria Carvalho and I'm Júnior Full-Stack Web Developer from Braga, Portugal.
        My academic background is Sociology where I learned to integrate in my life very interesting lens apon the world.
        <span className="missing"> But something was missing.</span> I felt like I needed to be able to create and be creative in a field I've always loved and felt is so relevant: Tech. 
        My life changed when I engaged in a intensive <span className="javascript">Javascript</span> Full-Stack Web Development Bootcamp and gained the tools to create big and beautiful things!
      </h3>
      <h3>Im into coding, music and nature.</h3>
  
    </div>

    <div className="img-container"></div>
    <img src={maria} alt="Maria Carvalho's portrait" className="portrait"  data-aos="fade-left" data-aos-duration="1000"/>
    </div>

    </div>
    </section>
  )
}

export default About