/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Rishab Kumar",
  title: "Hi all, I'm Rishab",
  subTitle: emoji(
    "A passionate tech geek 💻 having an experience of delivering Web and Mobile applications with the help of Cloud ☁."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rishabkumar7",
  linkedin: "https://www.linkedin.com/in/rishabkumar7/",
  gmail: "rishabkumar7@gmail.com",
  twitter: "https://twitter.com/rishabk7",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Tech entusiast exploting the world of Cloud",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of London",
      logo: require("./assets/images/UOL.png"),
      subHeader: "BSc Computer Science",
      duration: "May 2021 - ",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "St. Lawrence College",
      logo: require("./assets/images/slc.png"),
      subHeader: "Computer Networking",
      duration: "May 2016 - April 2018",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "DevOps Engineer",
      company: "ECi Software Solutions",
      companylogo: require("./assets/images/eci.jpg"),
      date: "Feb 2021 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "CloudOps Engineer",
      company: "ECi Software Solutions",
      companylogo: require("./assets/images/eci.jpg"),
      date: "May 2019 – Feb 2021",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Technical Support Specialist",
      company: "ECi Software Solutions",
      companylogo: require("./assets/images/eci.jpg"),
      date: "May 2018 – May 2019",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Azure Administrator",
      subtitle:
        "Microsoft Azure Administrator AZ-104 certification.",
      image: require("./assets/images/az-104.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/31150f89-4eeb-4141-b720-427babd90d44/public_url"
        }
      ]
    },
    {
      title: "AWS Solutions Architect Associate",
      subtitle:
        "AWS Solutions Architect Associate Certification.",
      image: require("./assets/images/aws-sa.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/e2a7ae13-77b0-4356-a6fb-ccfa081bdd91/public_url"
        }
      ]
    },
    {
      title: "Terraform Associate",
      subtitle: "HashiCorp Certified: Terraform Associate.",
      image: require("./assets/images/tfa.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/9c9d89c2-2f88-42d0-80b0-201687079cb3/public_url"
        }
      ]
    },
    {
      title: "AWS SysOps Administrator",
      subtitle: "AWS Certified SysOps Administrator – Associate.",
      image: require("./assets/images/aws-sys.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/ee413500-3137-4040-8bc9-657b26a4c9c5/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.rishabkumar.com/az-104-study-guide-azure-administrator",
      title: "AZ-104 Study Guide: Azure Administrator",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://blog.rishabkumar.com/a-cloud-guru-azure-resume-challenge-2021",
      title: "Cloud Resume Challenge - Azure",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    },
    {
      url: "https://blog.rishabkumar.com/how-i-passed-the-sc-900-microsoft-security-compliance-and-identity-fundamentals-exam",
      title: "How I passed the Microsoft Security Fundamentals SC-900 exam",
      description: "This week I got my SC-900 exam results back and I passed!"
    },
    {
      url: "https://blog.rishabkumar.com/adding-custom-domain-and-ssl-certificate-azure-static-web-apps",
      title: "Adding custom domain and SSL certificate Azure Static Web Apps",
      description: "In the first article, we saw how to deploy a website with Azure Static Web app, it does the CI/CD for you. In this one, we will add a custom domain."
    },
    {
      url: "https://blog.rishabkumar.com/what-is-wsl-and-how-to-use-it-with-vscode",
      title: "What is WSL and how to use it with VSCode",
      description: "This week I got my SC-900 exam results back and I passed!"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/rishabkumar/embed/episodes/How-they-started-their-Tech-Careers-with-John-Lunn-e13jfq7", "https://anchor.fm/rishabkumar/embed/episodes/How-they-started-their-Tech-Careers-with-Anais-Urlichs-e14evgt", "https://anchor.fm/rishabkumar/embed/episodes/How-they-started-their-Tech-Careers-with-Lou-Bichard-e17tkni"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "rishabk7", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
