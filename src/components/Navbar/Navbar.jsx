import "./navbar.css"; 
import { useState } from 'react'
import {BiHomeAlt} from "react-icons/bi"
import { TiUser } from "react-icons/ti";
import { VscTools } from "react-icons/vsc";
import {MdWork} from "react-icons/md"
import { AiOutlineMessage } from "react-icons/ai";

function Navbar() {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <section>
      <div id="navbar-desktop">
        <div >
          <a href="/#" className="nav-Links maria">{"<Maria.Portfolio />"}</a>
        </div>
        <div className="navegation">
          <a href="/#about" className="nav-Links nav-Links2">About Me</a>
          <a href="/#skills" className="nav-Links nav-Links2">Skills</a>
          <a href="/#projects" className="nav-Links nav-Links2">Projects</a>
          <a href="/#contact" className="nav-Links nav-Links2 last-Link">Contact</a>
        </div>
      </div>

      <nav>
        <a
          href="/#"
          onClick={() => setActiveNav("#")}
          className={activeNav === "#" ? "active" : ""}
        >
          <BiHomeAlt />
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={activeNav === "#about" ? "active" : ""}
        >
        <TiUser/>
        </a>
        <a
          href="#skills"
          onClick={() => setActiveNav("#skills")}
          className={activeNav === "#skills" ? "active" : ""}
        >
          <VscTools />
        </a>
        <a
          href="#projects"
          onClick={() => setActiveNav("#projects")}
          className={activeNav === "#projects" ? "active" : ""}
        >
          <MdWork />
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={activeNav === "#contact" ? "active" : ""}
        >
          <AiOutlineMessage />
        </a>
      </nav>
    </section>
  )
}

export default Navbar;