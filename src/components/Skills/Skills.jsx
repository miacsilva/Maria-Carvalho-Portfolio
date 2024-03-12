import "./skills.css";
import { useEffect } from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";
import { SiNodedotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { ImGit } from "react-icons/im";
import { SiNetlify } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import Aos from "aos"
import "aos/dist/aos.css"

function Skills() {

  useEffect(()=>{
Aos.init()
  },[])

  return (
    <section id="skills">
      <div className="content">
        <h1>.mySkills</h1>
        <div className="skills-container">
          <div className="skill-type"  data-aos="fade-down-right" data-aos-duration="2000">
            <p className="title" >Frontend</p>
            <div className="skills-icons">

            <div id="double-set-icons">
              <span className="icon-description">HTML</span>
              <FaHtml5 className="icon" />
            </div>

            <div id="double-set-icons">
              <span className="icon-description">CSS</span>
              <FaCss3Alt className="icon" />
            </div>

            <div id="double-set-icons">
              <span className="icon-description">Javascript</span>
              <RiJavascriptFill className="icon"/>
            </div>

            <div id="double-set-icons">
              <span className="icon-description">React</span>
              <FaReact className="icon"/>
            </div>

            <div id="double-set-icons">
              <span className="icon-description">Bootstrap</span>
              <FaBootstrap className="icon"/>
            </div>
             
            <div id="double-set-icons">
              <span className="icon-description">Rest API</span>
              <TbApi className="icon" />
            </div>

          </div>
        </div>

        <div className="skill-type" data-aos="fade-down-left" data-aos-duration="2000">
          <p className="title"> Backend</p>
          <div className="skills-icons">

            <div id="double-set-icons">
              <span className="icon-description">Javascript</span>
              <RiJavascriptFill className="icon"/>
            </div>

            <div id="double-set-icons">
              <span className="icon-description">Node.Js</span>
              <SiNodedotjs className="icon"/>
            </div>
            
            <div id="double-set-icons">
              <span className="icon-description">Express</span>
              <SiExpress className="icon"/>
            </div>

            <div id="double-set-icons">
              <span className="icon-description">MongoDB</span>
              <SiMongodb className="icon"/>
            </div>
          </div>
        </div>

        <div className="skill-type" data-aos="fade-down-right" data-aos-duration="2000">
          <p className="title">Other</p>
          <div className="skills-icons">
            <div id="double-set-icons">
              <span className="icon-description">Adobe Illustrator</span>
              <SiAdobeillustrator className="icon"/>
            </div>
            
            <div id="double-set-icons">
              <span className="icon-description">Git</span>
              <ImGit className="icon"/>
            </div>

            <div id="double-set-icons">
              <span className="icon-description">Netlify</span>
              <SiNetlify className="icon" />
            </div>
            
            <div id="double-set-icons">
              <span className="icon-description">Github</span>
              <VscGithub className="icon"/>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Skills;
