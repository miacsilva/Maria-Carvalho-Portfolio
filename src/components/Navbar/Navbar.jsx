import "./navbar.css"; 

function Navbar() {
  return (
    <section id="navbar">

    <div>
    <a href="/" className="nav-Links maria">{"<Maria.dev />"}</a>
    </div>

    <div className="navegation">
    <a href="/#about" className="nav-Links nav-Links2">About</a>
    <a href="/#projects" className="nav-Links nav-Links2">Projects</a>
    <a href="/#contact" className="nav-Links nav-Links2">Contact</a>
    </div>


    </section>
  )
}

export default Navbar;