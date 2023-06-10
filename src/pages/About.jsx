import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import myData from "../../data";
import Inquiry from "../assets/Inquiry";

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
            {myData.myCertificatesArray?.map((cer, i) => {
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
            {myData.mySkillsArray?.map((iconEl, i) => {
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
      <Inquiry />
      <br />
    </div>
  );
}
