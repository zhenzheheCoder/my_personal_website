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
    id: 0,
    image: project1,
    value: "experience",
    name:"Software Engineer Intern",
    location: "Photonicare, Inc",
    info: ["Worked in a group of 4 to develop test suite and webpage for OtoScope, a mid-ear imaging medical device.",
      "Used Python to automate manual testing, increasing testing efficency by 80% and accuracy by 50%.",
      "Developed web pages to fetch, display and monitor imaging results and reports using React.JS."
    ]
  },
  {
    id: 1,
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
    
      id: 2,
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
    id: 3,
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
    id: 4,
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
    
      id: 5,
      image: project2,
      value: "projects",
      name:"File upload plateform",
      location: "March 2023-May 2023",
      info: ['Developed a online file storage system using GoLang and React.JS on which users can register their own accounts and upload files and download files.',
        "Designed and implemented front-end webpages using React.js. Enabled file drop zone using Dropzone.JS, making file upload more intuitive.",
        "Implemented the back-end with Gin and Golang, used AWS S3 to store users’ uploaded files. Leveraged MongoDB to store users’ account information (password, username, files, etc.)",
        "Designed and maintained RESTful APIs that ensures successful connection between frond and back-end."]
    
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
