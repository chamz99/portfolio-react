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
          href="https://drive.google.com/file/d/1mNqSdzKwWXdce43wiDUdBdoK6CgEB7Z2/view?usp=drive_link"
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
