import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareFacebook,
  faSquareGithub,
  faSquareInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="Footer text-center">
      <footer>
        <a
          href="https://z-p15.www.instagram.com/teytap/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className="icons"
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.facebook.com/mehtappacala/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faSquareFacebook}
            className="icons"
          ></FontAwesomeIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/mehtap-tataro%C4%9Flu-b12210a2/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="icons"
          ></FontAwesomeIcon>
        </a>
        <a href="https://github.com/teytap" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faSquareGithub}
            className="icons"
          ></FontAwesomeIcon>
        </a>
        <br />
        <small className="text-center">
          This website was coded by Mehtap Tataroğlu, and is{" "}
          <a href="https://github.com/teytap/MT-Portfolio">open-sourced</a>
        </small>
      </footer>

      {/* <FontAwesomeIcon icon={faCoffee} /> */}
    </div>
  );
}
