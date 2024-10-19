import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.jpg";
const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_img} />
      <h1>
        <span>I'm chamudi Rasanjalee,</span> Fullstack developer Based in Sri
        Lanka.{" "}
      </h1>
      <p>I have hands-on experience in .NET, Java, and React technologies. </p>
      <div className="hero-action">
        <a href="mailto:Chamu6859@gmail.com">
          <div className="hero-connect">connect with me</div>
        </a>
        <a
          href="https://drive.google.com/file/d/1JCkT_iOUz-K0SLlP5nZ-3pwzm8c555-C/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hero-resume">My resume</div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
