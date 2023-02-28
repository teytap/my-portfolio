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
      name: "Weather App",
      src: "/images/weather-react.png",
      text: "Built with HTML, CSS , Bootstrap, API with React",
      icons: ["{faHtml5}", "faCss3"],
    },
    {
      name: "Quizzical Game",
      src: "/images/quizzical.png",
      text: "Built with HTML, CSS , API with React",
    },
  ];
  let worksElements = worksArray.map((work) => {
    return (
      <div className="col-md-4 mt-4" key={work.name}>
        <div className="about-me-description">
          <img
            src={work.src}
            className="img-fluid rounded mb-2"
            alt="weather app image"
          />
          <h3 className="text-center m-1">{work.name}</h3>
          <p className="text-center m-1">
            {work.text}
            <br />
            {/* {work.icons?.map((iconEl) => {
              return (
                <FontAwesomeIcon
                  icon={iconEl}
                  className="icons"
                  key={iconEl}
                ></FontAwesomeIcon>
              );
            })} */}
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="work">
      <div className="container">
        <div className="about-me-hero">
          <h2 className="mb-5">Take a look at what I've been working on!</h2>
          <div className="row">
            {worksElements}
            <div className="col-md-4 mt-4">
              <div className="about-me-description">
                <img
                  src="/images/weather-react.png"
                  className="img-fluid rounded mb-2"
                  alt="weather app image"
                />
                <h3 className="text-center m-1">Weather App</h3>
                <p className="text-center m-1">
                  Built with HTML, CSS , Bootstrap, API with React
                  <br />
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className="icons"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faCss3}
                    className="icons"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faSquareJs}
                    className="icons"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    className="icons"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faReact}
                    className="icons"
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="about-me-description">
                <img
                  src="/images/quizzical.png"
                  className="img-fluid rounded mb-2"
                  alt="quiz game image"
                />
                <h3 className="text-center m-1">Quizzical Game</h3>
                <p className="text-center m-1">
                  Built with HTML, CSS, API, JS, React
                  <br />
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className="icons"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faCss3}
                    className="icons"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faSquareJs}
                    className="icons"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faReact}
                    className="icons"
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="about-me-description">
                <img
                  src="/images/tenzies.png"
                  className="img-fluid rounded mb-2"
                  alt="tenzies game image"
                />
                <h3 className="text-center m-1">Tenzies Game</h3>
                <p className="text-center m-1">
                  Built with HTML, CSS, API, JS, React
                  <br />
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className="icons"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faCss3}
                    className="icons"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faSquareJs}
                    className="icons"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faReact}
                    className="icons"
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="about-me-description">
                <img
                  src="/images/dycto-react.png"
                  className="img-fluid rounded mb-2"
                  alt="dictionary-app-image"
                />
                <h3 className="text-center m-1">Dictionary App</h3>
                <p className="text-center m-1 mb-5">
                  Built with HTML, CSS, API with React
                  <br />
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className="icons"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faCss3}
                    className="icons"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faSquareJs}
                    className="icons"
                  ></FontAwesomeIcon>
                  <FontAwesomeIcon
                    icon={faReact}
                    className="icons"
                  ></FontAwesomeIcon>
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="about-me-description">
                <img
                  src="/images/meme-generator.png"
                  className="img-fluid rounded mb-2"
                  alt="meme generator image"
                />
                <h3 className="text-center m-1">Meme Generator App</h3>
                <p className="text-center m-1 mb-5">
                  Built with HTML, CSS, API with React
                  <br />
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-square-js"></i>
                  <i className="fa-brands fa-react"></i>
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="about-me-description">
                <img
                  src="/images/Lingoes.png"
                  className="img-fluid rounded mb-2"
                  alt="lingoes translation image"
                />
                <h3 className="text-center m-1">Translation App</h3>
                <p className="text-center m-1">
                  Built with HTML, CSS,JS,API
                  <br />
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-square-js"></i>
                  <i className="fa-brands fa-bootstrap"></i>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-me-description">
                <img
                  src="/images/advice.png"
                  className="img-fluid rounded mb-2"
                  alt="random advice image"
                />
                <h3 className="text-center m-1">Random Advice</h3>
                <p className="text-center m-1 mb-5">
                  Built with HTML, CSS, JS, API
                  <br />
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-square-js"></i>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-me-description">
                <img
                  src="/images/weather-tr.png"
                  className="img-fluid rounded mb-2"
                  alt="my-weather-tr-image"
                />
                <h3 className="text-center m-1">Weather App</h3>
                <p className="text-center m-1 mb-5">
                  Built with HTML, CSS, API and Javascript
                  <br />
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-square-js"></i>
                  <i className="fa-brands fa-bootstrap"></i>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="about-me-description">
                <img
                  src="/images/Calculator.png"
                  className="img-fluid rounded mb-2"
                  alt="calculator-image"
                />
                <h3 className="text-center m-1">Calculator App</h3>
                <p className="text-center m-1 mb-5">
                  Built with HTML, CSS, API and Javascript
                  <br />
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-square-js"></i>
                </p>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="about-me-description">
                <img
                  src="/images/Password generator.png"
                  className="img-fluid rounded mb-2"
                  alt="Password image"
                />
                <h3 className="text-center m-1">Password Generator</h3>
                <p className="text-center m-1">
                  Built with HTML, CSS , JS
                  <br />
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-square-js"></i>
                </p>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="about-me-description">
                <img
                  src="/images/World clock.png"
                  className="img-fluid rounded mb-2"
                  alt="world clock image"
                />
                <h3 className="text-center m-1">World Clock</h3>
                <p className="text-center m-1">
                  Built with HTML, CSS, API, JS
                  <br />
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-square-js"></i>
                </p>
              </div>
            </div>
            <div className="col-md-4 mt-4">
              <div className="about-me-description">
                <img
                  src="/images/Photography Portfolio.png"
                  className="img-fluid rounded mb-2"
                  alt="photography portfolio image"
                />
                <h3 className="text-center m-1">Photography Portfolio</h3>
                <p className="text-center m-1">
                  Built with HTML, CSS, API, JS
                  <br />
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-square-js"></i>
                  <i className="fa-brands fa-bootstrap"></i>
                </p>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="about-me-description">
                <img
                  src="/images/basketball.png"
                  className="img-fluid rounded mb-2"
                  alt="basketball score image"
                />
                <h3 className="text-center m-1">Basketball Score App</h3>
                <p className="text-center m-1">
                  Built with HTML, CSS, JS
                  <br />
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-square-js"></i>
                </p>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="about-me-description">
                <img
                  src="/images/splitter.png"
                  className="img-fluid rounded mb-2"
                  alt="splitter image"
                />
                <h3 className="text-center m-1">Tip Splitter App</h3>
                <p className="text-center m-1">
                  Built with HTML, CSS, JS
                  <br />
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-square-js"></i>
                </p>
              </div>
            </div>

            <div className="col-md-4 mt-4">
              <div className="about-me-description">
                <img
                  src="/images/Dycto.png"
                  className="img-fluid rounded mb-2"
                  alt="dictionary image"
                />
                <h3 className="text-center m-1">Dictionary App</h3>
                <p className="text-center m-1">
                  Built with HTML, CSS, API, JS
                  <br />
                  <i className="fa-brands fa-html5"></i>
                  <i className="fa-brands fa-css3"></i>
                  <i className="fa-brands fa-square-js"></i>
                </p>
              </div>
            </div>
          </div>
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
