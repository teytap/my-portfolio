import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears, faMobileScreen } from "@fortawesome/free-solid-svg-icons";
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
const myData = {
  mySkillsArray: [
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
      name: "React",
      icon: faReact,
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
      name: "Bootstrap",
      icon: faBootstrap,
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
  ],
  mySkillsArray2: [
    {
      name: "Hosting",
      src: "/images/icon-netlify.svg",
    },
    {
      name: "Firebase",
      src: "/images/icon-firebase.png",
    },
    {
      name: "Next.js",
      src: "/images/icon-next-js.svg",
    },

    {
      name: "Tailwind",
      src: "/images/icon-tailwind.svg",
    },
    {
      name: "Typescript",
      src: "/images/icon-typescript.svg",
    },
    {
      name: "Redux",
      src: "/images/icon-redux.svg",
    },
  ],
  myCertificatesArray: [
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
  ],
  worksArray: [
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
      text: "Built with HTML, CSS, JS, React, API",
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
      url: "https://serene-bombolone-517479.netlify.app/",
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
      url: "https://ornate-torrone-ec322d.netlify.app",
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
      name: "Speed Typing Game",
      src: "/images/speed-typing.png",
      text: "Built with HTML, CSS, API, React",
      icons: [faHtml5, faCss3, faReact],
      url: "https://speed-typing-game-mt.netlify.app",
    },
    {
      id: 16,
      name: "Color Scheme Generator App",
      src: "/images/color-scheme.png",
      text: "Built with HTML, CSS, API, JS",
      icons: [faHtml5, faCss3, faGears, faSquareJs],
      url: "https://color-scheme-mt.netlify.app",
    },
    {
      id: 17,
      name: "Movie Watch List App",
      src: "/images/movie-watch.png",
      text: "Built with HTML, CSS, API, JS, Bootstrap,Local Storage, ",
      icons: [faHtml5, faCss3, faGears, faSquareJs, faBootstrap],
      url: "https://movie-watch-list-mt.netlify.app",
    },
    {
      id: 18,
      name: "Message Us App",
      src: "/images/messagus.png",
      text: "Built with HTML, CSS, API, JS, Firebase",
      icons: [faHtml5, faCss3, faGears, faSquareJs],
      url: "https://tiny-message-us.netlify.app",
    },
    {
      id: 19,
      name: "Dashboard App",
      src: "/images/dashboard.png",
      text: "Built with HTML, CSS, API, JS. Chrome-extension, todo-list",
      icons: [faHtml5, faCss3, faGears, faSquareJs],
      url: "https://dashboard-mt.netlify.app/",
    },
  ],
};
export default myData;
