import { useState } from "react";
import { useEffect } from "react";
import "./contact.css"; 
import emailJs from "@emailjs/browser"
import Swal from 'sweetalert2';
import { FaGithubSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import CVMariaCarvalho from "../../assets/MariaCarvalho_CV_PD.pdf"
import Aos from "aos"
import "aos/dist/aos.css"


function Contact() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");



function sendEmail(e){
  e.preventDefault();
  if(name==="" || email==="" || message ===""){
   alert("Fill all fields please");
   return;
  }
  const Alert = () => {
    Swal.fire("Mensagem enviada!"," " ,'success')
  }
  Alert ()

  const templateParams = {
    from_name: name,
    message: message,
    email: email
  }
  emailJs.send("service_og08c1a", "template_rf46jyc", templateParams, "sVsPfcEOY0LJq_7CK")
  .then((res) =>{

    setName("")
    setEmail("")
    setMessage("")
  }, (error)=>{
    console.log(
      `Error: ${error}`
    )
  })
}

useEffect(()=>{
  Aos.init()
    },[])

  return (
    <section id="contact" className="container"> 
    
    
      <h1 className="title"> .letsTalk</h1>
      

      <form className="form" onSubmit={sendEmail} data-aos="fade-up" data-aos-duration="2000">
        <input 
          className="input"
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        
        <input 
          className="input"
          type="text"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />

        <textarea 
          className="textarea"
          placeholder="Your message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          required
        />

        <input className="button" type="submit" value="Send" />
      </form>
      
        <a className="cv-btn email" href="mailto:maria.carolina.carvalho@hotmail.com"  >Send me an email</a>
        <a className="cv-btn" href={CVMariaCarvalho} download >Download CV</a>
      <div className="icons">
      <a href="https://github.com/miacsilva" target="_blank" rel="noreferrer" >    <FaGithubSquare className="icon1"/> </a>
      <a href="https://www.linkedin.com/in/maria-s-carvalho/" target="_blank" rel="noreferrer"   > <BsLinkedin className="icon2"/> </a>
      </div>
    </section>
  )
}

export default Contact;