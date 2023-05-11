import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import {
  faSquareJs,
  faHtml5,
  faCss3,
  faReact,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
export default function Work() {
  // let styles = { display: props.showWork ? "block" : "none" };
  const worksArray = [
    {
      id: 1,
      name: "Weather App",
      src: "/images/weather-react.png",
      text: "Built with HTML, CSS , Bootstrap,JS, API, React",
      icons: [faHtml5, faCss3, faSquareJs, faBootstrap, faReact],
      url: "https://me-weather-mt.netlify.app/",
    },
    {
      id: 2,
      name: "Quizzical Game",
      src: "/images/quizzical.png",
      text: "Built with HTML, CSS , JS, API, React",
      icons: [faHtml5, faCss3, faSquareJs, faReact],
      url: "https://quizzical-mt.netlify.app/",
    },
    {
      id: 3,
      name: "Tenzies Game",
      src: "/images/tenzies.png",
      text: "Built with HTML, CSS, JS, React",
      icons: [faHtml5, faCss3, faSquareJs, faReact],
      url: "https://tenzies-mt.netlify.app/",
    },
    {
      id: 4,
      name: "Dictionary App",
      src: "/images/dycto-react.png",
      text: "Built with HTML, CSS, JS, React",
      icons: [faHtml5, faCss3, faSquareJs, faReact],
      url: "https://kaleidoscopic-dictionary.netlify.app/",
    },
    {
      id: 5,
      name: "Meme Generator App",
      src: "/images/meme-generator.png",
      text: "Built with HTML, CSS, JS, API, React",
      icons: [faHtml5, faCss3, faSquareJs, faReact],
      url: "https://meme-generator-mt.netlify.app/",
    },
    {
      id: 6,
      name: "Translation App",
      src: "/images/Lingoes.png",
      text: "Built with HTML, CSS, JS, API, React",
      icons: [faHtml5, faCss3, faSquareJs, faReact],
      url: "https://lingoes-mt.netlify.app/",
    },
    {
      id: 7,
      name: "Random Advice",
      src: "/images/advice.png",
      text: "Built with HTML, CSS, JS, API",
      icons: [faHtml5, faCss3, faSquareJs],
      url: "https://nimble-palmier-99e8c1.netlify.app/",
    },
    {
      id: 8,
      name: "Weather App",
      src: "/images/weather-tr.png",
      text: "Built with HTML, CSS, JS, API, Bootstrap",
      icons: [faHtml5, faCss3, faSquareJs, faBootstrap],
      url: "https://me-weather-tr.netlify.app/",
    },
    {
      id: 9,
      name: "Calculator App",
      src: "/images/Calculator.png",
      text: "Built with HTML, CSS, JS",
      icons: [faHtml5, faCss3, faSquareJs],
      url: "https://calculator-starlight.netlify.app/",
    },
    {
      id: 10,
      name: "Password Generator",
      src: "/images/Password generator.png",
      text: "Built with HTML, CSS, JS",
      icons: [faHtml5, faCss3, faSquareJs],
      url: "https://passwordgenerator-mt.netlify.app/",
    },
    {
      id: 11,
      name: "World Clock",
      src: "/images/World clock.png",
      text: "Built with HTML, CSS, JS, API",
      icons: [faHtml5, faCss3, faSquareJs],
      url: "https://candid-liger-bd876c.netlify.app/",
    },
    {
      id: 12,
      name: "Photography Portfolio",
      src: "/images/Photography Portfolio.png",
      text: "Built with HTML, CSS, JS, Bootstrap",
      icons: [faHtml5, faCss3, faSquareJs, , faBootstrap],
      url: "https://lucent-photographer.netlify.app/",
    },
    {
      id: 13,
      name: "Basketball Score App",
      src: "/images/basketball.png",
      text: "Built with HTML, CSS, JS",
      icons: [faHtml5, faCss3, faSquareJs],
    },
    {
      id: 14,
      name: "Tip Splitter App",
      src: "/images/splitter.png",
      text: "Built with HTML, CSS, JS",
      icons: [faHtml5, faCss3, faSquareJs],
      url: "https://tangerine-splitter.netlify.app/",
    },
    {
      id: 15,
      name: "Dictionary App",
      src: "/images/Dycto.png",
      text: "Built with HTML, CSS, API, JS",
      icons: [faHtml5, faCss3, faSquareJs],
    },
  ];
  let worksElements = worksArray.map((work) => {
    return (
      <div className="col-md-4 mt-4" key={work.id}>
        <div className="about-me-description">
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
            {work.icons?.map((iconEl) => {
              return (
                <FontAwesomeIcon
                  icon={iconEl}
                  className="icons"
                  key={iconEl}
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
