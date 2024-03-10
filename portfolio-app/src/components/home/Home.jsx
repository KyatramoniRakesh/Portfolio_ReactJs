import React from "react";
import "./home.css";
import Me from "../../assets/main_pic.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

function Home() {
  return (
    <section className="home " id="home">
      <div className="intro">
        <img src={Me} alt="Me" className="home__img" />
        <h1 className="home__name">Kyatramoni Rakesh</h1>
        <span className="home__education">I'm a Full Stack developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
}

export default Home;
