import "./home.css";
import Lottie from "lottie-react";
import AnimationGirl from "/src/assets/Animation-girl-seated.json";
import { useTypewriter, Cursor } from "react-simple-typewriter";


function Home() {
  const [text] = useTypewriter({
    words: ["< Full-Stack Web Developer />"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section id="home">
    <div className="home-container">
      <div className="animation">
        <Lottie className={"lottie"} animationData={AnimationGirl} />
      </div>
      <div className="home-info">
        <h2>
          Hi, I'm <span>Maria</span>!
        </h2>

        <p>
          {text} <Cursor cursorColor="#50CB94" cursorStyle="|" />
        </p>
        <p> </p>
      </div>
      </div>
    </section>
  );
}

export default Home;
