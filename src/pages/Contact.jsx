import React from "react";
import Inquiry from "../assets/Inquiry";
export default function Contact() {
  // let styles = { display: props.showContact ? "block" : "none" };
  return (
    <div className="contact">
      <div className="container">
        <div className="about-me-hero">
          <h2 className="mb-5">Let's get in touch!</h2>
          <h3>Email</h3>
          <p className="m-1">
            <a
              href="mailto:teytap@gmail.com"
              target="_blank"
              title="Contact via email"
            >
              teytap@gmail.com
            </a>
          </p>
          <h3>Instagram</h3>
          <p className="m-1">
            <a
              href="https://z-p15.www.instagram.com/teytap/"
              target="_blank"
              title="Contact via Instagram"
            >
              @teytap
            </a>
          </p>
          <h3>Facebook</h3>
          <p className="m-1">
            <a
              href="https://www.facebook.com/mehtappacala/"
              target="_blank"
              title="Contact via Facebook"
            >
              @mehtappacala
            </a>
          </p>
        </div>
      </div>
      <Inquiry />
      <br />
    </div>
  );
}
