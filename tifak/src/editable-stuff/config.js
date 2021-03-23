// Navigation Bar Section
const navBar = {
  show: true,
};

// Main Body Section
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Muhammad",
  middleName: "",
  lastName: "Tifak",
  message: "The No. 1 Hyperactive, Knucklehead Ninja!",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/KingGenius5",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/king_genius_5/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/muhammad-tifak-877428168/",
    },
  ],
};

// ABOUT Section
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/prof.jpeg"),
  imageSize: 405,
  message:
    "The name's Tifak, Muhammad Tifak. I'm a senior at Make School studying Applied Computer Science with a (insert buzzword) PASSION for blockchain technologies, back-end development, anime, giving back to the community, as well as a host of solution-oriented things.",
};

// PROJECTS Section
const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "kinggenius5",
  reposLength: 0,
  specificRepos: [
    "makePNG",
    "Trollbot",
    "Marxist-Markov",
    "Ronafii",
    "Macrosoft-Paint",
    "Pic-Perfect",
  ],
};

// SKILLS Section
//will add more skills later
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 85 },
    { name: "ReactJS", value: 65 },
    { name: "Data Structures", value: 80 },
    { name: "JavaScript", value: 80 },
    { name: "Go", value: 65 },
    { name: "MongoDB", value: 75 },
    { name: "Firebase", value: 55 },
    { name: "Docker", value: 70 },
    { name: "AWS", value: 50 },
    { name: "Caprover", value: 60 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 60 },
    { name: "Self Confidence", value: 98 },
    { name: "Collaboration", value: 60 },
    { name: "Communication", value: 60 },
    { name: "Time Management", value: 20 },
    { name: "Creativity", value: 60 },
    { name: "Critical Thinking", value: 60 },
    { name: "Organizational", value: 60 },
  ],
};

export { navBar, mainBody, about, repos, skills };
