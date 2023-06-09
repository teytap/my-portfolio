import React from "react";
import { Link } from "react-router-dom";
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
  const mySkillsArray = [
    {
      name: "HTML5",
      icon: faHtml5,
    },
    {
      name: "CSS3",
      icon: faCss3,
    },
    {
      name: "JavaScript",
      icon: faSquareJs,
    },
    {
      name: "Bootstrap",
      icon: faBootstrap,
    },
    {
      name: "React",
      icon: faReact,
    },
    {
      name: "Responsive Web Design",
      icon: faMobileScreen,
    },
    {
      name: "Api Integration",
      icon: faGears,
    },
    {
      name: "InVision",
      icon: faInvision,
    },
    {
      name: "Git",
      icon: faGit,
    },
    {
      name: "SEO",
      icon: faGoogle,
    },
    {
      name: "Figma",
      icon: faFigma,
    },
    {
      name: "Git",
      icon: faGit,
    },
  ];
  const myCertificatesArray = [
    {
      img: "/images/scrimba-cer.png",
      src: "https://scrimba.com/certificate/uxQer9t7/gfrontend",
    },
    {
      img: "/images/mt-react-certificate.png",
      src: "https://www.shecodes.io/certificates/8f28e9f61558047ceba8e09b09772b9c",
    },
    {
      img: "/images/SheCodes-Responsive-Certificate.png",
      src: "https://www.shecodes.io/certificates/88781d5752d034aef6642caa485b18d6",
    },
    {
      img: "/images/SheCodes-Plus Certificate.png",
      src: "https://www.shecodes.io/certificates/cead4f2b642c6aef71687e67a42976f9",
    },
    {
      img: "/images/SheCodes-Basic-Certificate.png",
      src: "https://www.shecodes.io/certificates/86d8d71bf8c3ad7ab358688beb0cb5d1",
    },
    { img: "/images/grasshopper.png", src: "" },
    {
      img: "/images/diksiyon.png",
      src: "",
    },
  ];
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
                {/* <Link href="/work">work</Link> */}
                <Link
                  to="/work"
                  className="btn btn-branding mb-4"
                  title="Mehtap's work"
                >
                  View All Projects
                </Link>
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
            {myCertificatesArray?.map((cer, i) => {
              return (
                <div className="col-md-3 mt-5" key={i}>
                  <a href={cer.src} rel="no-referer" target="_blank">
                    <img
                      src={cer.img}
                      className="img-fluid rounded certificate"
                      alt="Certificate of Mehtap"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="contact-box row d-flex justify-content-between text-center">
        <div className="col">
          <h2 className="">My Skills</h2>

          <ul className="mb-5">
            {mySkillsArray?.map((iconEl, i) => {
              return (
                <li key={i}>
                  <FontAwesomeIcon
                    icon={iconEl.icon}
                    className="icons"
                  ></FontAwesomeIcon>
                  {iconEl.name}
                </li>
              );
            })}

            <li>
              <img src="/images/netlify-icon.png" alt="" width="50" /> Hosting
            </li>
            <li>
              <img src="/images/redux-icon.png" alt="" width="50" /> Redux
            </li>
            <li>
              <img src="/images/icon-firebase.png" alt="" width="40" /> Firebase
            </li>
          </ul>
        </div>
        <div className="col">
          <h2 className="">My Education</h2>
          <ul>
            <li>
              <a
                href="https://www.metu.edu.tr/en"
                target="_blank"
                re="no-referer"
              >
                <img
                  src="https://www.metu.edu.tr/system/files/logo_orj/3/3.4.png"
                  alt=""
                  width="400"
                />
              </a>{" "}
            </li>
            <li className="mb-5">Mathematics</li>
          </ul>
          <h2 className="">My Courses</h2>
          <ul>
            <li>
              <a
                href="https://www.shecodes.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://www.shecodes.io/assets/branding/logo-shecodes-f9fa0540d113c086f61eb6e89466c0cbd24a42163b6a96d4b01da078803f53ee.png"
                  alt=""
                  width="200"
                  className="mb-2"
                />
              </a>
            </li>
            <li>Front-end developing</li>
            <li>
              <a
                href="https://scrimba.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/scrimba.jpeg"
                  alt=""
                  width="220"
                  className="mb-2"
                />
              </a>
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
