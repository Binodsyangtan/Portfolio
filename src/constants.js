// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
// import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// // Experience Section Logo's

// Education Section Logo's
import amritLogo from './assets/education_logo/amrit.png';
import vsniketan from './assets/education_logo/vsniketan.png';
import geetaLogo from './assets/education_logo/geetalogo.png';

// Project Section Logo's
import sampannaHomes from './assets/work_logo/sampanna.png'
import portfolio from './assets/work_logo/portfolio.png'
import yumyatra from'./assets/work_logo/yum-yatra.png'
import agroConnect from './assets/work_logo/agro.png'
import websathi from './assets/work_logo/websathi.png'

//certificate section logos
import Merncerti from './assets/certificate/mern.png'
import jscerti from './assets/certificate/js.png'
import nextjs from './assets/certificate/nextjs.png'

//leadership
import vice from "./assets/leadership/vice.png"
import ideathonLogo from "./assets/leadership/ideathon.png"
import crlogo from "./assets/leadership/cr.jpg"




export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      // { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      // { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];



  
  export const education = [
    {
      id: 0,
      img: amritLogo,
      school: "Amrit Campus-Tribhuvan University",
      date: "Currently Pursuing (7th sem)",
      // grade: "73.2%",
      desc: "I am currently pursuing a BSc. CSIT degree, which is a four-year program that integrates the core areas of computer science with practical aspects of information technology. The curriculum includes subjects such as programming, data structures, algorithms, database systems, web development, networking, and software engineering. This degree is helping me build a strong foundation in both theoretical concepts and real-world application, preparing me for roles in software development, system design, and IT solutions.",
      degree: " Bachelor of Science in Computer Science and Information Technology(CSIT)-TU",
    },
    {
      id: 1,
      img: vsniketan,
      school: "Vishwa Niketan Sec. School,Tripureswor, ward No. 11-kathmandu",
      date: "2078 B.S (2021 A.D) year of completion",
      grade: "B+",
      desc: "I completed my class 12 education from Vishwa Niketan Sec. School,t Tripureswor, ward No. 11-kathmandu, under the NEB board, where I studied Physics, Chemistry, Mathematics, C.English and C.Nepali (Biolody in 11) ",
      degree: "Science",
    },
    {
      id: 2,
      img: geetaLogo,
      school: "Shree Geeta Mata Secondary School,Dallu-kathmandu",
      date: "2075 B.S (2019 A.D) year of completion " ,
      grade: "A",
      desc: "I completed my class 10 education from Shree Geeta Mata Secondary School,Dallu-kathamandu",
      // degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Sampanna Homes(E-commerce)",
      description:
        "Sampanna Homes is a full-stack eCommerce web application built using the MERN stack (MongoDB, Express.js, React, Node.js). The frontend is developed with React and styled using Tailwind CSS, offering a responsive and user-friendly interface. It includes features like product listing, shopping cart, user authentication, and a blog section. The backend, powered by Node.js and Express, handles RESTful APIs and secure user management with JWT authentication. MongoDB is used as the database to store product, user, and order information. The project also includes an admin panel for managing products and blogs. The site is deployed using Netlify for the frontend and Render for the backend.",
      image: sampannaHomes,
      tags: ["HTML", "Tailwind CSS", "React JS", "ExpressJs","Nodejs","mongoDB"],
      github: "https://github.com/Binodsyangtan/Sampanna-Homes",
      webapp: "https://sampanna-homes.netlify.app",
    },
    {
      id: 1,
      title: "Yum Yatra – Food Delivery App (Frontend)",
      description:
        "A responsive food delivery frontend built with React and Tailwind CSS. Users can browse restaurants, view menus, and place orders with a smooth and intuitive UI.",
      image: yumyatra,
      tags: [ "React JS", "Tailwind CSS",],
      // github: "",
      webapp: "https://yum-yatra.netlify.app/",
    },
    {
      id: 2,
      title: "WebSathi PVt. Ltd ",
      description:
        "A responsive Company Landing page  frontend built with Ts,nextjs and Tailwind CSS.",
      image: websathi,
      tags: [ "Nextjs","TS", "Tailwind CSS",],
      // github: "",
      webapp: "https://websathi.net/",
    },
    
    {
      id: 3,
      title: "Portfolio project",
      description:
        "My Portfolio Website is a personal web application built using React.js for a dynamic and component-based UI. It is styled with Tailwind CSS and HTML, ensuring a clean, responsive, and mobile-friendly design. The site showcases personal information, projects, skills, and contact details in an interactive format. Various npm packages are integrated to enhance functionality and animations, such as smooth scrolling, form handling, and icon libraries. The portfolio is optimized for performance and user experience, reflecting modern web development best practices.",
      image: portfolio,
      tags: ["HTML", "Tailwind CSS", "React JS", "Npm-packages"],
      github: "https://github.com/Binodsyangtan/Portfolio",
      webapp: "https://binod-syangtan.netlify.app/",
    },
    {
      id: 4,
      title: "AgroConnect(Working)",
      description:
        "AgroConnect is a digital platform that connects farmers, suppliers, and buyers to streamline communication, improve access to resources, and expand market opportunities—promoting sustainable and efficient agriculture through technology.",
      image: agroConnect,
      tags: ["React JS", "GO", "NODEJS ", "expressjs","POSTGRESQL"],
      // github: "https://github.com/Binodsyangtan/Portfolio",
      // webapp: "https://binod-syangtan.netlify.app/",
      content:"working on (Group project) "
    },

  ];  


  export const certificate = [
    {
      id:0,
      title:"MERN Stack Training",
      institution:"Mindrisers Institute of Technology - Kumari Galli 2, Kathmandu 44600",
      image:Merncerti,
      description:"Completed a comprehensive MERN stack training covering React, Node.js, Express, and MongoDB. Gained hands-on experience building full-stack applications and deploying them. Developed strong practical skills in JavaScript, API design, and modern web development workflows."
    },
    {
      id:1,
      title:"JavaScript",
      institution:"Online SSCALER Topics",
      image:jscerti,
      description:"Completed a comprehensive JavaScript certification covering fundamentals, advanced concepts, and practical problem-solving. Gained strong skills in ES6+, asynchronous programming, DOM manipulation, and algorithmic thinking."
    },
    {
      id:2,
      title:"7-day NextJs Workshop",
      institution:"PNC BCA Association",
      image:nextjs,
      description:"Participated in an intensive 7-day workshop on Next.js covering server-side rendering, routing, API routes, and backend integration. Built practical projects to strengthen skills in modern React framework development.",
    },
  ]

  export const leadershipActivities = [
  {
    id: 1,
    image: vice,
    title: "Vice Treasurer",
    organization: "CodeForChange",
    date: "Jan 2024 – Present",
    role: "Financial management and event planning",
    description:
      "Managed community funds, organized tech events like CodeFest and ITMela, collaborated with sponsors.",
    skills: "Leadership, Budgeting, Event Management",
    tags: ["Leadership", "Finance", "Event Planning","Collaboration","Responsibility","Event Coordination"],
  },
  {
    id: 2,
    image: ideathonLogo,
    title: "Event Host & Organizer",
    organization: "ITMela,Ideathon & CodeFest",
    date: "2024",
    role: "Hosting and organizing tech festivals and ideathons",
    description:
      "Hosted ideathons and coding competitions engaging 100+ participants, worked with sponsors and volunteers.",
    skills: "Public Speaking, Event Hosting, Teamwork",
    tags: ["Hosting","Audience Engagement","Event Management", "Public Speaking", "Teamwork","Planning & Execution","Coordination"],
  },
  {
    id: 3,
    image: crlogo,
    title: "College Representative (CR)",
    organization: "CodeForChange",
    date: "June 2023 – 2024 Dec",
    role: "Student liaison and event coordination",
    description:
      "Led student outreach, promoted workshops and bootcamps, coordinated with other CRs.",
    skills: "Communication, Coordination, Community Building",
    tags: ["Leadership", "Communication", "Community"],
  },
];