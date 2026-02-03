// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo3.svg";
import logo from "./assets/logo3.svg";
// Profile Image
import profile from "./assets/profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import materialui from "./assets/techstack/materialui.png";
import Typescript from "./assets/techstack/typescript.png";
import visualstudio from "./assets/techstack/visualstudio.png";
import csharp from "./assets/techstack/c#.png";
// Porject Images
import cloudvault from "./assets/projects/cloudvault.png";
import newsapp from "./assets/projects/newsapp.png";
import textutils from "./assets/projects/textutils.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Viswatej A",
  tagline: "Software Enginner",
  img: profile,
  about: `I am a Software Engineer at GlobalLogic, currently modernizing enterprise-scale multi-tenant systems by architecting migrations from legacy Angular to high-performance React ecosystems.

I am deeply invested in building scalable and maintainable systems that handle complex business logic. As a core problem solver, I leverage my foundation in Data Structures and Algorithms to ensure system reliability and clean architectural patterns.

🎯 Key Achievement: Secured a 98.9 percentile in JEE Main 2021, ranking in the top 1% (AIR 11,000) among 1 million+ candidates.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/viswatej-abbireddy-8b2162349/",
  github: "https://github.com/Viswa-Codes",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Associate Software Engineer",
    Company: `GlobalLogic`,
    Location: "Pune",
    Type: "Full Time",
    Duration: "Aug 2025 - Present",
  }
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "B.Tech in Electronics and Communication Engineering",
    Company: "Visvesvaraya National Institute of Technology (VNIT), Nagpur",
    Location: "Nagpur, India",
    Type: "Full Time",
    Duration: "Dec 2021 - May 2025",
  }
];
// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  csharp: csharp,
  react: react,
  Typescript: Typescript,
  MaterialUI : materialui,
  bootstrap: bootstrap,
  vscode: vscode,
  visualstudio: visualstudio,
  postman: postman,
  npm: npm,
  git: git,
  github: github
};

// Enter your Project Details here
export const projectDetails = [
 {
  title: "MyNotebook - Secure Cloud Vault",
  image: cloudvault,
  description: `Full-stack productivity suite for secure note management. 

  Migrated codebase from JS to TS to ensure type-safety and eliminate runtime errors.

  Engineered V2 update by implementing a modular MVC architecture for enhanced maintainability. Optimized data retrieval by transitioning from slow COLLSCANs (O(N)) to high-performance IXSCANs (O(logN)) using MongoDB compound indexing, while securing user data with Bcrypt and session Management by JWT.`,
    techstack: "TypeScript, MongoDB, Express, React, Node.js, JWT, Bcrypt",
    previewLink: "https://mynotebook-brown.vercel.app",
    githubLink: "https://github.com/Viswa-Codes/mynotebook",
},
  {
    title: "ReactNews - Timely News Portal",
    image: newsapp,
    description: `A modern news consumption platform that delivers live from global sources. It provides a seamless browsing experience with categorized filtering and a professional UI.Features dynamic category filtering and a fully responsive interface. 
    
   Implemented a custom Infinite Scroll architecture that fetches news articles on-demand as the user reaches the bottom of the page, significantly reducing the initial data payload. Utilized error handling to manage network fluctuations and integrated loading skeletons to maintain a seamless UX during asynchronous data streams.`,
    techstack: "React, GNews API, JavaScript, Bootstrap",
    previewLink: "https://react-news-liart.vercel.app/",
    githubLink: "https://github.com/Viswa-Codes/ReactNews",
  },
  {
    title: "TextUtils - Professional Text Utility Suite",
    image: textutils,
    description: `A fast tool for analyzing and formatting text. It helps with common tasks like changing text case and removing extra spaces while showing live stats like word count and reading time.

    Built with reusable React components and used Regular Expressions (RegEx) for clean text processing. Included a Dark Mode feature.`,
    techstack: "React, JavaScript, Bootstrap, CSS",
    previewLink: "https://viswa-codes.github.io/TextUtils-app/",
    githubLink: "https://github.com/Viswa-Codes/TextUtils-app",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "viswatejabbireddyprof@gmail.com",
  phone: "+91 12345 67890",
};
