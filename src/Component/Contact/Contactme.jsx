import React from "react";
import "./Contactme.css";
import mail_icon from "../../assets/mail_icon.jpeg";
import location_icon from "../../assets/location_icon.jpeg";
import call_icon from "../../assets/call_icon.jpeg";

const Contactme = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects. Feel free to reach
            out! You can contact me via email or through my social media
            profiles, and I'll get back to you as soon as possible.
          </p>
          <div className="Contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>Chamu6859@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Hettipola,Sri Lanka</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+94760910308</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name" name="name" />
            <label htmlFor="">Your Email</label>
            <input type="Email" placeholder="Enter your Email" name="Email" />
            <label htmlFor="">Write your message here</label>
            <input
              type="message"
              raw="8"
              cols="50"
              placeholder="Enter your message"
            />
            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contactme;
