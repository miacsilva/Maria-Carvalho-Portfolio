import "./skills.css";
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

function Skills() {
  return (
    <section id="skills"> 

    <div className="content">
    <h1>
        .mySkills
    </h1>

    <div className="skills-container">

    <div className="skill-type">
      <p className="title">Frontend</p>

      <p className="skills-icons">
    <FaHtml5 />
    <FaCss3Alt />
    <RiJavascriptFill />
    <FaReact />
    <FaBootstrap />
    <TbApi />
</p>
    </div>

    <div className="skill-type">
      <p className="title">Backend</p>

<p className="skills-icons">
    <RiJavascriptFill />
    <SiNodedotjs />
    <SiExpress />
    <SiMongodb />
</p>
    </div>

    <div className="skill-type">
      <p className="title">Other</p>

      <p className="skills-icons"><SiAdobeillustrator /></p>
  

    </div>





    </div>

    </div>


    </section>
  )
}

export default Skills;