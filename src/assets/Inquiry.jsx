import React from "react";
export default function Inquiry() {
  return (
    <div className="contact-box row d-flex justify-content-between text-center">
      <div className="col">
        <h2 className="">Work Inquiry</h2>
        <p>Let's work together and I'll help you by all my best</p>
      </div>
      <div className="col">
        <a
          href="mailto:teytap@gmail.com"
          className="btn btn-branding mt-5 text-center"
          id="contact"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
