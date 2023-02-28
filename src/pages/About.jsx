import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHtml5,
  faCss3,
  faSquareJs,
  faReact,
  faBootstrap,
  faInvision,
  faGoogle,
  faGit,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { faGears, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="about-me-hero">
          <div className="row">
            <div className="col-md-6">
              <div className="about-me-description">
                <h2 className="">Hi I am Mehtap Tataroğlu</h2>
                <h6>Front-end developer based in Turkey</h6>
                <p>
                  For anyone who wants to start learning code, this workshop is
                  very interesting. You will be challenged with different
                  exercises, and everything is well explained, homework and
                  deadlines are good for keep focus
                </p>
                <a
                  href="/work.html"
                  className="btn btn-branding mb-4"
                  title="Mehtap's work"
                >
                  View All Projects
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="/images/mehtapp.png"
                className="img-fluid rounded"
                alt="Picture of Mehtap"
              />
            </div>

            <h2 className="mt-5">My Certificates</h2>
            <div className="col-md-3 mt-5">
              <img
                src="/images/mt-react-certificate.png"
                className="img-fluid rounded certificate"
                alt="Picture of Mehtap"
              />
            </div>
            <div className="col-md-3 mt-5">
              <img
                src="/images/SheCodes-Responsive-Certificate.png"
                className="img-fluid rounded certificate"
                alt="Picture of Mehtap"
              />
            </div>
            <div className="col-md-3 mt-5">
              <img
                src="/images/SheCodes-Plus Certificate.png"
                className="img-fluid rounded certificate"
                alt="Picture of Mehtap"
              />
            </div>
            <div className="col-md-3 mt-5">
              <img
                src="/images/SheCodes-Basic-Certificate.png"
                className="img-fluid rounded certificate"
                alt="Picture of Mehtap"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="contact-box row d-flex justify-content-between text-center">
        <div className="col">
          <h2 className="">My Skills</h2>
          <p>
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faHtml5}
                  className="icons"
                ></FontAwesomeIcon>
                HTML5
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faCss3}
                  className="icons"
                ></FontAwesomeIcon>
                CSS3
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faSquareJs}
                  className="icons"
                ></FontAwesomeIcon>
                JavaScript
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faReact}
                  className="icons"
                ></FontAwesomeIcon>
                React
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faBootstrap}
                  className="icons"
                ></FontAwesomeIcon>
                Bootstrap
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faMobileScreen}
                  className="icons"
                ></FontAwesomeIcon>
                Responsive Web Design
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faGears}
                  className="icons"
                ></FontAwesomeIcon>
                Api Integration
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faInvision}
                  className="icons"
                ></FontAwesomeIcon>
                InVision
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faGit}
                  className="icons"
                ></FontAwesomeIcon>
                Git
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="icons"
                ></FontAwesomeIcon>
                SEO
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faFigma}
                  className="icons"
                ></FontAwesomeIcon>
                Figma
              </li>
              <li>
                <img src="/images/netlify-icon.png" alt="" width="40" /> Hosting
              </li>
            </ul>
          </p>
        </div>
        <div className="col">
          <h2 className="">My Education</h2>
          <ul>
            <li>
              <img
                src="https://www.metu.edu.tr/system/files/logo_orj/3/3.4.png"
                alt=""
                width="400"
              />{" "}
            </li>
            <li className="mb-5">Mathematics</li>
          </ul>
          <h2 className="">My Courses</h2>
          <ul>
            <li>
              <img
                src="https://www.shecodes.io/assets/branding/logo-shecodes-f9fa0540d113c086f61eb6e89466c0cbd24a42163b6a96d4b01da078803f53ee.png"
                alt=""
                width="200"
                className="mb-2"
              />
            </li>
            <li>Front-end developing</li>
            <li>
              <img
                src="/images/scrimba.jpeg"
                alt=""
                width="220"
                className="mb-2"
              />
            </li>
            <li>Front-end developing</li>
          </ul>
        </div>
      </div>
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
      <a href="mailto:teytap@gmail.com" className="mail-link">
        teytap@gmail.com
      </a>
      <br />
    </div>
  );
}
