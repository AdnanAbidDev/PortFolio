import IMG1 from "../../assets/nextgen.png";
import IMG2 from "../../assets/prospect.png";
import IMG3 from "../../assets/Leap.png";
import IMG4 from "../../assets/amazon.png";
import IMG5 from "../../assets/omni.png";
import IMG6 from "../../assets/project3.png";
import PROSPECT1 from "../../assets/prospect/1.png";
import PROSPECT2 from "../../assets/prospect/2.png";
import PROSPECT3 from "../../assets/prospect/3.png";
import PROSPECT4 from "../../assets/prospect/4.png";
import PROSPECT5 from "../../assets/prospect/5.png";
import PROSPECT6 from "../../assets/prospect/6.png";
import PROSPECT7 from "../../assets/prospect/7.png";

import LEAP1 from "../../assets/leap/1.png";
import LEAP2 from "../../assets/leap/2.png";
import LEAP3 from "../../assets/leap/3.png";
import LEAP4 from "../../assets/leap/4.png";
import LEAP5 from "../../assets/leap/5.png";

export const projects = [
  {
    image: IMG1,
    title: "NEMT NextGen",
    live: "https://nemtnextgen.com/#/pages/authentication/login-v2",
    features: [
      "SQL",
      "C#",
      ".NET",
      "EntityFrameWork",
      "MultiTenancy",
      "Angular",
      "Veuxy",
    ],
  },
  {
    image: IMG2,
    title: "Prospects",
    collage: [
      PROSPECT1,
      PROSPECT2,
      PROSPECT3,
      PROSPECT4,
      PROSPECT5,
      PROSPECT6,
      PROSPECT7,
    ],
    features: [
      "SQL",
      "C#",
      ".NET",
      "Dapper",
      "MinimalApi",
      "Angular",
      "TypeScript",
    ],
  },
  {
    image: IMG3,
    title: "LEAP",
    collage: [LEAP1, LEAP2, LEAP3, LEAP4, LEAP5],
    features: [
      "SQL",
      "C#",
      ".NET",
      "Dapper",
      "MinimalApi",
      "Angular",
      "TypeScript",
    ],
  },
  {
    image: IMG4,
    github: "https://github.com/AdnanAbidMERN/hosted-amazon",
    live: "https://amazoneclone.cyclic.app/",
    title: "Amazon Clone",
    features: ["MongoDB", "Express", "React", "ContextAPI", "Redux", "Node"],
  },
  {
    image: IMG5,
    github: "https://github.com/AdnanAbidMERN/OmniFood-deployed",
    live: "https://omnifood-adab.netlify.app/",
    title: "Landing Page Of Diet Startup",
    features: ["HTML", "CSS", "Javascript", "Responsive", "UI/UX", "Landing"],
  },
  {
    image: IMG6,
    github: "https://github.com",
    live: "#",
    title: "My Portfolio",
    features: ["MongoDB", "Express", "React", "ContextAPI", "Redux", "Node"],
  },
];
