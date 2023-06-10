import React from "react";
import myData from "../../data";
import Inquiry from "../assets/Inquiry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Work() {
  // let styles = { display: props.showWork ? "block" : "none" };

  let worksElements = myData.worksArray.map((work) => {
    return (
      <div className="col-md-4 mt-4" key={work.id}>
        <div className="about-me-description  projects">
          <a href={work.url} target="_blank">
            <img
              src={work.src}
              className="img-fluid rounded mb-2"
              alt="weather app image"
            />
          </a>

          <h3 className="text-center m-1">{work.name}</h3>
          <div className="text-center m-1">
            {work.text}
            <br />
            {work.icons?.map((iconEl, i) => {
              return (
                <FontAwesomeIcon
                  icon={iconEl}
                  className="icons"
                  // key={iconEl}
                  key={i}
                ></FontAwesomeIcon>
              );
            })}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="work">
      <div className="container">
        <div className="about-me-hero">
          <h2 className="mb-5">Take a look at what I've been working on!</h2>
          <div className="row">{worksElements}</div>
        </div>
      </div>
      <Inquiry />

      <br />
    </div>
  );
}
