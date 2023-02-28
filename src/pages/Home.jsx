import React from "react";
export default function Home() {
  // let styles = { display: props.showHome ? "block" : "none" };
  return (
    <div className="home">
      {" "}
      <div className="hero">
        <p>👋🏻 Hi, I am</p>
        <h1>Mehtap Tataroğlu</h1>
        <h2>Front-end developer based in Turkey</h2>
        <a
          href="/contact.html"
          className="btn btn-branding"
          title="Contact Mehtap"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
