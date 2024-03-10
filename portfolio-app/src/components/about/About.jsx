import React from "react";
import "./about.css";
import Image from "../../assets/mini_me.JPG";
import AboutBox from "./AboutBox"

function About() {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img1" />

        
          <div className="about__info">
            <p className="about__description">
              🚀 Hi, I'm Kyatramoni Rakesh, a Full Stack Developer passionate about crafting user-centric web solutions.<br/>
              💡 With expertise in both front-end and back-end technologies, I create seamless and scalable applications.<br/>
              🌐 Constantly evolving with industry trends, I bring a collaborative spirit to every project.<br/>
              ✨ Let's build something extraordinary together – reach out and let the coding journey begin!<br/>
            </p>
            <a href="https://drive.google.com/file/d/1AHML4IrXhfLVrPwdz6NlUy4sWebpFUp2/view?usp=drive_link" className="btn">
              Download CV
            </a>
          </div>
      </div>

      <AboutBox />  

    </section>
  );
}

export default About;
