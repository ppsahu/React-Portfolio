import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.jpg";

import college1 from "../assets/csuflogo.jpg";
import college2 from "../assets/Srmseal.jpg";

export const HERO_CONTENT = `Welcome to my Portfolio! I’m Pratyush Sahu, a computer science professional 
                            based in Fullerton, California. I hold a Master of Science in Computer 
                            Science from California State University, Fullerton, with studies focused on areas such as Modern Software 
                            Management, Advanced Algorithms Engineering, Expert Systems Design, 
                            and Artificial Intelligence. Additionally, I have a Bachelor of 
                            Technology in Electronics and Communication from SRM Institute of 
                            Science and Technology.`;

export const ABOUT_TEXT1 = `In my professional journey at Tata Consultancy Services, I advanced 
                          from an Assistant System Engineer Trainee to a System Engineer. 
                          During this time, I led data backup operations, conducted system 
                          maintenance, and developed new features for SAPUI5, significantly 
                          reducing downtime and enhancing user experience. I also developed 
                          "HeCon," a learning module for SAP employees, and streamlined 
                          development environments using Docker, reducing setup time by 50%.`;

export const ABOUT_TEXT2 = `As a Teaching Associate at California State University, Fullerton, I 
                          designed and delivered the "Compilers and Languages" curriculum, 
                          incorporating real-world examples and collaborative techniques.`;

export const ABOUT_TEXT3 = `My career has been characterized by a commitment to enhancing system 
                          performance, user engagement, and data reliability. I thrive in 
                          environments that challenge my technical and managerial skills, and 
                          I am always eager to contribute to innovative projects.`;

export const EXPERIENCES = [
  {
    year: "August 2023 - May 2024",
    role: "Teaching Associate",
    company: " California State University, Fullerton",
    description: `At California State University, Fullerton, I enhanced the "Compilers and Languages" curriculum with real-world examples and GitHub collaboration, improving student comprehension by 25% and assignment quality by 33%. I also led curriculum reviews with faculty, aligning course content with industry trends and increasing student satisfaction by 15%.`,
    technologies: ["Public Speaking", "Teaching", "Compilers"],
  },
  {
    year: "December 2021 - June 2022",
    role: "System Engineer: BackUp team",
    company: " Tata Consultancy Services | Client: SAP",
    description: `Led data backup operations with NodeJS and SAPUI5, ensuring 99.9% data reliability. Conducted maintenance and debugging, reducing downtime by 30%. Developed SAPUI5 features, enhancing UI flexibility across four regions. Optimized backend performance, reducing latency by 20%.`,
    technologies: ["HTML", "CSS", "mySQL", "NodeJS", "SAPUI5", "Debugging", "UI Development"],
  },
  {
    year: "April 2021 - November 2021",
    role: "Assistant System Engineer: HeCon team",
    company: " Tata Consultancy Services | Client: SAP",
    description: `Developed "HeCon" learning module using ReactJS, NodeJS, and PostgreSQL, benefiting 200+ users. Enhanced user engagement by 25% with new functionalities. Streamlined development with Docker, cutting setup time by 50%. Improved UI with Material UI.`,
    technologies: ["ReactJS", "NodeJS", "PostgreSQL", "Docker", "UI Enhancement"],
  },
  {
    year: "May 2020 - March 2021",
    role: "Assistant System Engineer: System Build team",
    company: " Tata Consultancy Services | Client: SAP",
    description: `Configured SAP systems (S/4 HANA, SAP Fiori) from scratch, meeting all customer requirements. Executed SUM upgrades on ABAP and JAVA systems, boosting efficiency by 15%. Performed add-on installations and kernel upgrades, ensuring seamless performance. Maintained HANA databases, achieving 99.8% uptime.`,
    technologies: ["SAP S/4 HANA", "SAP Fiori", "ABAP", "JAVA", "System Upgrades", "HANA Database Maintenance"],
  },
  {
    year: "May 2019 - April 2020",
    role: "Assistant System Engineer Trainee: L1 Support Team",
    company: " Tata Consultancy Services | Client: SAP",
    description: `Managed ticketing for P1-P3 issues, resolving 95% within SLA. Conducted 50+ maintenance activities, kernel upgrades, OS installations, and restarts, ensuring stability. Performed regular backups, securing data integrity for 500+ GB of data.`,
    technologies: ["Ticket Management", "System Maintenance", "Kernel Upgrades", "OS Installation", "Data Backup"],
  },
];

export const PROJECTS = [
  {
    title: "Chess Analysis Engine Tool",
    image: project1,
    description:
      "Developed a Python system to analyze 500+ chess games, achieving 85% prediction accuracy and automating data retrieval, enhancing efficiency and insights with interactive visualizations.",
    technologies: ["Python", "Pandas", "MatplotLib", "scikit-learn", "Bokeh", "PyCharm", "Git" ],
  },
  {
    title: "Split-Payment App",
    image: project2,
    description:
      "Developed a user-friendly web application utilizing ReactJS for the frontend and TypeScript for type-safe programming, enabling seamless payment splitting among friends and reducing manual calculation efforts by 40%.",
    technologies: ["ReactJS", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Restaurant Visitor Forecasting",
    image: project4,
    description:
      "The project uses LightGBM for predicting restaurant visitor numbers, featuring data analysis, feature engineering, and a Flask web app for interactive predictions.",
    technologies: ["Python", "LightGBM", "Flask", "Pandas", "Matplotlib", "Seaborn", "scikit-learn", "NumPy"],
  },
];
export const EDUCATION = [
  {
    image: college1,
    college: "California State University, Fullerton",
    degree: "Master of Science ",
    major: "Computer Science",
    cgpa: "3.63",
    location: "Fullerton, California, United States",
  },
  {
    image: college2,
    college: "SRM Institute of Science and Technology",
    degree: "Bachelor of Technology ",
    major: "Electronics and Communication Engineering",
    cgpa: "3.54",
    location: "Chennai, Tamil Nadu, India",
  },
];
// export const EDUCATION2 = 
//   {
//     college: "SRM Institute of Science and Technology",
//     degree: "Bachelor of Technology ",
//     major: "Electronics and Communication Engineering",
//     cgpa: "3.54",
//   };
export const CONTACT = {
  address: "600 Langsdorf Dr, A31, Fullerton, CA",
  phoneNo: "+1 657-514-3077 ",
  email: "pratyush.sahu@csu.fullerton.edu",
};
