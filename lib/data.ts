import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import social from "@/public/social.jpg";
import pocket from "@/public/pocket.jpg";
import netflix from "@/public/netflix.jpg";
import cred from '@/public/cred.jpg';
import game from '@/public/game.jpg';
import meta from '@/public/meta.jpg';
import stayx from '@/public/stayx.jpg';

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
  title: "B.tech UnderGraduate student",
  location: "BIT, MESRA",
  description:
    "Pursuing Computer Science Engineering ",
  icon: React.createElement(LuGraduationCap),
  date: "2020 - 2024",
},
{
  title: "MERN Stack Developer Intern",
  location: "Bipolar Factory, Banglore",
  description: `
  Worked on a Production House website - Drumsticks Production.
  Tech stacks used in project are Next.js, React, React Player and Tailwind CSS.
`,
  icon: React.createElement(CgWorkAlt),
  date: "2023",
},
{
  title: "SDE Intern",
  location: "Chalkbox, Dehradun",
  description: `
  Worked on Company's secondary website .
  Used React-Bootsrap, Redux for front-end and axios,
   REST API, Express, Node.js for backend.
`,
icon: React.createElement(FaReact),
  date: "2023",
},

] as const;

export const projectsData = [
  {
    title: "Socio",
    description: `
      MERN stack social media application .
      Allowing User Registration and Authentication, Posting and Sharing
      of posts , like and comment,  and follow 
      or unfollow a user.
    `,
    tags: ["React", "Node.js", "MongoDB", "Express", "Axios", "JWT"],
     imageUrl: social,
  },
  {
    title: "Stay-Xpert",
    description:
    `
    Full stack hotel booking web application .
    Allowing User Registration and Log In, explore and book hotels
    along with selecting check in and check out dates , number of guests.
  `,
    tags: ["Firebase", "React-Dom", "Node.js", "Express", "Redux"],
     imageUrl: stayx,
  },
  {
    title: "Streamify",
 
    description:
    `
    Full stack Movies/TV Shows streaming web application .
    Allowing User Registration and Log In,browsing through a vast 
    collection of movies and TV shows, selecting by genres,
    adding or removing Movies from watchlists.
  `,
    tags: ["React", "Node.js", "API", "MongoDb", "Express", "Axios"],
     imageUrl: netflix,
  },
  {
    title: "PocketGuard",
 
    description:
    `
    Expense/income tracker web application .
    Allowing User to enter income and expenses and select 
    the category, date and create an entry. Used chart.js
    to visualize the tracking along with voice capabilities.
  `,
    tags: ["React", "Javascript", "Swagger-UI", "Speechly", "CSS", "Chart.js"],
     imageUrl: pocket,
  },

  {
    title: "MetaLink",
 
    description:
    `
    Front-end website created using Framer-Motion.
    Used  components like motion.div and features like 
    transitions and gesture support for  interactive animations.
    Used Next.js for server-side-rendering. 
  `,
    tags: ["React", "Next.js", "API", "Framer-Motion", "Tailwind", "React-Dom"],
     imageUrl: meta,
  },
  {
    title: "Dice Roll Game",
 
    description:
    `
    Front-end dice roll game web application .
    Allowing 2 Users to
    throw a dice and has an option to hold the number or pass it.
    Any time dice rolls 6 the player's score goes back to 0.
    In the end, the player with maximum score wins the game.
  `,
    tags: ["CSS", "Javascript", "React", ],
     imageUrl: game,
  },
  {
    title: "Cred-Clone",
 
    description:
    `
   Front-end apllication which is a clone of CRED.
   Allowing the user to navigate through the entire
   website and explore the options to pay online.
  `,
    tags: ["React", "Javascript", "HTML", "CSS", "React-Dom"],
     imageUrl: cred,
  },

] as const;

export const skillsData = [
  "HTML5",
  " CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git/GitHub",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "React-Dom",
  "Express",
  "Firebase Login",
  "C++",
  "DBMS",
  "OOPS",
  "OS",
  "Operating Systems",
  "Data Structure and Algorithms",

] as const;
