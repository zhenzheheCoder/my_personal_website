import { ImPencil } from "react-icons/im";
import { BsShop, BsHeart, BsWatch, BsStar } from "react-icons/bs";
import { IoLogoWechat } from "react-icons/io5";
import { DiAndroid } from "react-icons/di";
import { BiCoffeeTogo } from "react-icons/bi";
import { TiDeviceDesktop } from "react-icons/ti";
import { TbSpeakerphone } from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";
import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";
import project4 from "./assets/project4.jpg";
import project5 from "./assets/project5.jpg";
import project6 from "./assets/project6.jpg";
import project7 from "./assets/project7.jpg";

import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpg";

import testimonial1 from "./assets/testimonial1.jpg";
import testimonial2 from "./assets/testimonial2.jpg";
import testimonial3 from "./assets/testimonial3.jpg";

import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoMailRead } from "react-icons/go";

export const navLinks = [
  {
    id: 1,
    text: "Home",
    href: "home",
  },
  {
    id: 2,
    text: "Projects",
    href: "projects",
  },
  {
    id: 3,
    text: "Services",
    href: "services",
  },
  
  {
    id: 6,
    text: "Contact",
    href: "contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <ImPencil />,
    title: "Backend",
    info:"I am most fonded with backend! I love to think and learn about the logic and designs of complext and large systems. I mainly use SpringBoot and Gin for backend programming. I also have experience in Microservice and distributed plateforms, with Spring Cloud framework."
  },
  {
    id: 2,
    icon: <TiDeviceDesktop  />,
    title: "Full-Stack",
    info:"As you can probably tell, I designed this website using React.JS. I am experience in both front and backend development. I have also designed UI interfaces using MATLAB for physics experiments. "
  },
  {
    id: 3,
    icon: <DiAndroid/>,
    title: "Android",
    info:"I learned to develop in Android during working at Santa Clara University, where I designed applications for illness diagnosis from test strips. I am familiar with android camera development, Camera2 SDK and OpenCV SDK."
  },
  
];
export const serviceFinishes = [
  
  {
    id: 2,
    icon: <BsWatch />,
    text: "Coding Hours",
    amount: 5490,
  },
  
  {
    id: 4,
    icon: <BiCoffeeTogo />,
    text: "Coffee Consumed",
    amount: 300,
  },
  {
    id: 5,
    icon: <SiLeetcode />,
    text: "LeetCode Problems Solved",
    amount: 1490,
  },
  {
    id: 6,
    icon: <SiLeetcode />,
    text: "LeetCode Weekly Contest Score",
    amount: 2190,
  }
  
  
];
export const btns = [
  { id: 1, name: "Experience", value: "experience" },
  { id: 3, name: "Projects", value: "projects" },
     
];

export const projects = [
  {
    id:0,
    image: project1,
    value: "experience",
    name:"Backend Software Engineer",
    location: "Bytedance/Tiktok, Global E-commerce",
    info: ["I will be joining this upcoming April."
    ]
  },
  {
    id: 1,
    image: project1,
    value: "experience",
    name:"Software Engineer Intern",
    location: "Photonicare, Inc",
    info: ["Implemented a pipline for uploading and downloading firmware to Otosight, a mid ear medical scanning device based on Linux, with Cpp. Used Python to develop firmware upload script. Improved efficiency compared to manual update process.",
      "Designed and implemented a remote update for Otosight using Cpp and QT. Enabled multithreading for downloading firmware in the background.",
      "Adopted efficient memory management for write-buffer write and flush by limiting data chunks to be less than buffer size. Prevented overflow and leakage during the handling of GB-sized firmware downloads.",
      "Designed and implemented dynamic UI for Otosight in download notifications, progress and error message display using QML.",
      "Fetched ML-analyzed data of medical scans from backend with Axios. Rendered semi-transparent mask from the data using Canvas to serve as illness indication. Optimized rendering to finish in less than 3s.",
      "Implemented Lazy Loading with IntersectionObserver and ScollEventListener on mask loading. Decreased initial loading time by 66%."
    ]
  },
  {
    id: 2,
    image: project1,
    value: "experience",
    name:"Backend/Android Student Software Developer",
    location: "Santa Clara University",
    info: ['Participated in a group of three to develop an Android application and leading in developing the Backend server using Java and Spring Cloud.',
      "Developed Mirco-service based backend server for user service and image service support using SpringBoot, deployed on AWSEC2 Linux with Docker. Deployed AWS S3 for image storage and MySQL for user information storage. Established Nginxfor reverse proxy abilities.",
      "Integrated Microservice structure in backend service with Eureka and Spring Gateway. Utilized Reactor Model via Netty for multi-threading capabilities and RabbitMQ as message queue. Ensured stable requests for 2000+ QPS.",
      "Designed relational database form via MySQL for user information storage. Accelerated login requests by 80%."]
  },
  {
    
      id: 3,
      image: project2,
      value: "experience",
      name:"Software Developer Intern",
      location: "NeuroLeap",
      info: ['Worked as a group of about 50 people to develop and maintain a clinical program that diagnoses possible early stage autistic disorder using GoLang.',
        "Introduced report documentation with user text-input and image-input using Quill.JS in front-end via React.JS and Node.JS. Achieved user satisfaction rate up to 90%",
        "Used MongoDB to store file and user pairs on AWS S3. Implemented Redis as cache for popular user and data, resulted in 30% decrease in response time in fetching report files.",
        "Deployed goose for creating and updating a table for report in databases with PostgreSQL. Successfully applied version control for database and prevented database version conflict."]
    
  },
  {
    id: 4,
    image: project3,
    value: "experience",
    name: "Student Software Developer",
    location: "University of California, San Diego",
    info: ['Constructed GUI for monitoring, controlling and acquiring data from Voltage generator and Current generator using MATLAB. Helped to make experiment data acquisition more efficient(Decreased time consumption by half).',
        "Implemented and trouble-shoot a simulation program using Python for magnet’s magnetic fields with different sizes based on experiment requirements.",
        "Formulated a program with MATLAB to locate and move sample to optimal location for experiment magnetic field. Increase calculation from previous version by 60% through implementing binary search algorithms.",
        "Located and updated previous control programs with MATLAB for reading and controlling voltage generator, current generator, electrical motor platform, etc. (Lines of code: more than 10000). Prevented catastrophic experimental failure."]
  },
  {
    id: 5,
    image: project1,
    value: "projects",
    name:"Chat",
    location: "May 2023 - July 2023",
    info: ['Worked as group leader in a group of 4 to created a full-stack, distributed chatting platform that realized chatting, adding contacts, single-device-login using Java and SpringBoot.',
      "Initiated Eureka for general service discovery purposes and SpringWeb Gateway for directing requests. Successfully integrateMicroService with 5 distributed service servers and 10+ RESTful APIs.",
      "Integrated Microservice structure in backend service with Eureka and Spring Gateway. Utilized Reactor Model via Netty for multi-threading capabilities and RabbitMQ as message queue. Ensured stable requests for 2000+ QPS.",
      "Designed relational database form via MySQL for user information storage. Accelerated login requests by 80%."]
  },
  {
    
      id: 6,
      image: project2,
      value: "projects",
      name:"redBlog",
      location: "Aug 2024 - Present",
      info: ['Led a team of six to create a online blog. Responsible for designing and building front-end fans page and back-end development.',
        "Leveraged GraphQL API for registration, user look up and posting. Adopted a more code efficient API design compared to RESTful API.",
        "Used Nginx to host the front-end webpage, resolved CORS issue on front-end.",
        "Developed gRPC framework for internal service calls."]
    
  },
  
  
];

export const blogs = [
  {
    id: 1,
    image: blog1,
    title: "What Skills Do You Need for Marketing in 2023?",
  },
  {
    id: 2,
    image: blog2,
    title: "What is Web Design? A Comprehensive Guide",
  },
  {
    id: 3,
    image: blog3,
    title: "100 Best Web Design Blogs You Must Read in 2023",
  },
  {
    id: 4,
    image: blog4,
    title: "How to Learn Web Design at Home",
  },
];

export const testimonials = [
  {
    id: 1,
    image: testimonial1,
    name: "Billy Adams",
    business: "Rolling Thunder",
  },
  {
    id: 2,
    image: testimonial2,
    name: "Gary Jhonson",
    business: "Car Accessories",
  },
  {
    id: 3,
    image: testimonial3,
    name: "Venissa",
    business: "Fashin Shop",
  },
];

export const contacts = [
  {
    id: 1,
    icon: <TfiHeadphoneAlt />,
    text: "+1 858-531-3105",
  },
  
  {
    id: 3,
    icon: <GoMailRead />,
    text: "zhenzhehe24@gmail.com",
  },
  {
    id: 2,
    icon:<IoLogoWechat />, 
    text:"hzz_hustle"
  }
];
