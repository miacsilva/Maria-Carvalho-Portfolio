import "./home.css";
import Lottie from "lottie-react";
import AnimationGirl from "/src/assets/Animation-girl-seated.json"


function Home() {
  return (
    <section id="home">
      <div className="animation">
        <Lottie  className={"lottie"} animationData={AnimationGirl}/>
      </div>
      <div className="home-info">
        <p>Hi, Im <span>Maria</span>!</p>
      </div>
    </section>
  );
}

export default Home;
