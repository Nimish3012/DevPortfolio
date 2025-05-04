/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nimish's Portfolio",
  description:
    "A passionate developer focused on building scalable, user-centric solutions, blending technical skills with real-world impact and a drive for continuous growth.",
  og: {
    title: "Nimish Sahu Portfolio",
    type: "website",
    url: "https://nimish3012.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Nimish Sahu",
  logo_name: "NimshSahu",
  nickname: "B.Tech IT",
  subTitle:
    "A passionate developer focused on building scalable, user-centric solutions, blending technical skills with real-world impact and a drive for continuous growth.",
  resumeLink:
    "https://drive.google.com/file/d/1tP7VomnoWfqxm9C8zk4ziHBaDqxEhidR/view?usp=drive_link",
  portfolio_repository: "https://nimish3012.github.io/",
  githubProfile: "https://github.com/nimish3012",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Nimish3012",
  // linkedin: "https://www.linkedin.com/in/Nimish-Sahu-88710b138/",
  // gmail: "nimishsahu822@gmail.com",
  // gitlab: "https://gitlab.com/NimishSahu98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Nimish_3012",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/nimish3012",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nimish-sahu-a611a1224/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:nimishsahu822@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/Nimish_3012",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Google Cloud",
    link:
      "https://www.cloudskillsboost.google/public_profiles/c17503de-a329-4db4-83c6-4bf3074521c8",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/nimisterious/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Front-End Development",
      fileName: "FrontendDevImg",
      skills: [
        "⚡ Developing responsive and dynamic web applications using React.js and modern frontend technologies",
        "⚡ Internship experience building and maintaining scalable frontend projects with a focus on clean UI/UX design",
        "⚡ Familiar with component-driven development, API integration, and state management libraries like Redux",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Tailwind",
          fontAwesomeClassname: "file-icons:tailwind",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "devicon:postman",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        // {
        //   skillName: "Adobe Illustrator",
        //   fontAwesomeClassname: "simple-icons:adobeillustrator",
        //   style: {
        //     color: "#FF7C00",
        //   },
        // },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.geeksforgeeks.org/user/nimishsurwe/",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/nimishsahu/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/nimish_sahu",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Medicaps University Indore, Madhya Pradesh",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "mcu_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ Studied core Software Engineering subjects including DSA, DBMS, Operating Systems, AI , etc.",
        "⚡ Completed certified courses in Web Development, Promt Engineering, Cloud Computing to strengthen practical expertise",
        "⚡ Selected to be part of the National Service Scheme (NSS) and Student Placement Cell (SPC) under the TPO,     ,   recognizing leadership skills and commitment towards social initiatives and student engagement.",
      ],
      website_link: "https://www.medicaps.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Academy Cloud Foundations",
      subtitle: "- Amazon",
      logo_path: "AWS_CF1.png",
      certificate_link:
        "https://www.credly.com/badges/6d5ae9f9-c22f-48b0-b3be-819a54bc6ba6/public_url",
      alt_name: "AWS Academy",
      color_code: "#D6DBDF",
    },
    {
      title: "Database Management System",
      subtitle: "- Udemy",
      logo_path: "DBMS.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#2A73CC",
    },

    {
      title: "AWS Academy ML Foundations",
      subtitle: "- Amazon",
      logo_path: "AWS_CF1.png",
      certificate_link:
        "https://www.credly.com/badges/babec099-e3a4-4879-b081-d2d81cc822cf",
      alt_name: "AWS Academy",
      color_code: "#D6DBDF",
    },
    {
      title: "Pub/Sub Skill Badge",
      subtitle: "- Google Cloud",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://www.credly.com/badges/5c5f5f90-36ba-4ec8-bbff-ef03cb98a5cc",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "OOPS & DSA with C++",
      subtitle: "- OCSALLY Academy",
      logo_path: "cpp.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-75134fdb-9b60-44e2-88b1-13f5fec678c7/",
      alt_name: "UDEMY",
      color_code: "#1F70C199",
    },
    {
      title: "Sentiment with Natural Language",
      subtitle: "- Google Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.credly.com/badges/793d2b87-a7f7-4e05-9955-b57bc1b327e3",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "C Programming",
      subtitle: "- IIT Bombay",
      logo_path: "IITB.png",
      certificate_link:
        "https://drive.google.com/file/d/17bz_U7qPCZ4nfzPcL4ATiepFBUaaOHIt/view?usp=drive_link",
      alt_name: "IITB",
      color_code: "#FFCCBC",
    },

    {
      title: "Git Command Line",
      subtitle: "- Udemy",
      logo_path: "git.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-5cea1f6e-fae3-4c73-baae-f0a34a74b682/",
      alt_name: "IBM",
      color_code: "#f7786b",
    },
    {
      title: "HTML Programming",
      subtitle: "- IIT Bombay",
      logo_path: "IITB.png",
      certificate_link:
        "https://drive.google.com/file/d/1UY_anlbLKtrBr6rSfNFJL8bQmsYyyyU8/view?usp=drive_link",
      alt_name: "IITB",
      color_code: "#FFCCBC",
    },

    //   {
    //     title: "DL on Tensorflow",
    //     subtitle: "- Laurence Moroney",
    //     logo_path: "deeplearning_ai_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //     alt_name: "deeplearning.ai",
    //     color_code: "#00000099",
    //   },
    //   {
    //     title: "Fullstack Development",
    //     subtitle: "- Jogesh Muppala",
    //     logo_path: "coursera_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //     alt_name: "Coursera",
    //     color_code: "#2A73CC",
    //   },
    //   {
    //     title: "Kuberenetes on GCP",
    //     subtitle: "- Qwiklabs",
    //     logo_path: "gcp_logo.png",
    //     certificate_link:
    //       "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //     alt_name: "GCP",
    //     color_code: "#4285F499",
    //   },
    //   {
    //     title: "Cryptography",
    //     subtitle: "- Saurabh Mukhopadhyay",
    //     logo_path: "nptel_logo.png",
    //     certificate_link:
    //       "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //     alt_name: "NPTEL",
    //     color_code: "#FFBB0099",
    //   },
    //   {
    //     title: "Cloud Architecture",
    //     subtitle: "- Qwiklabs",
    //     logo_path: "gcp_logo.png",
    //     certificate_link:
    //       "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //     alt_name: "GCP",
    //     color_code: "#4285F499",
    //   },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked as a React Frontend Developer at an LMS startup, where I contributed to building dynamic and responsive user interfaces. Alongside this, I have strengthened my programming foundation through projects using React, JavaScript, C++, HTML, and CSS. I have been actively involved in volunteering activities, representing my university through NSS and SPC initiatives.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "React Frontend Developer",
          company: "Coding Judge",
          company_url: "https://codingjudge.com/",
          logo_path: "CJlogo.png",
          duration: "June 2024 - Aug 2024",
          location: "Hyderabad, Telangana",
          description:
            "Enhanced LMS platform UI responsiveness by 30%, resolved critical bugs, and supported over 1,500 students. Added dashboard features such as daily progress tracking, user streaks, and achievements through API integrations. Developed an AI-based MCQ evaluation system and implemented PDF report generation using jsPDF.",
          color: "#000000",
        },
        // {
        //   title: "Associate AI Engineer",
        //   company: "Legato Health Technology",
        //   company_url: "https://legatohealthtech.com/",
        //   logo_path: "legato_logo.png",
        //   duration: "June 2020 - Aug 2021",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
        //   color: "#0879bf",
        // },
        // {
        //   title: "Android and ML Developer",
        //   company: "Muffito Incorporation",
        //   company_url: "https://www.linkedin.com/company/muffito-inc/about/",
        //   logo_path: "muffito_logo.png",
        //   duration: "May 2018 - Oct 2018",
        //   location: "Pune, Maharashtra",
        //   description:
        //     "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //   color: "#9b1578",
        // },
        // {
        //   title: "Android Developer",
        //   company: "FreeCopy Pvt. Ltd.",
        //   company_url: "https://www.linkedin.com/company/freecopy/about/",
        //   logo_path: "freecopy_logo.png",
        //   duration: "Nov 2017 - Dec 2017",
        //   location: "Ahmedabad, Gujarat",
        //   description:
        //     "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //   color: "#fc1f20",
        // },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "React Frontend Developer",
    //       company: "Coding Judge",
    //       company_url: "https://www.tiktok.com/en/",
    //       logo_path: "tiktok_logo.png",
    //       duration: "June 2023 - Present",
    //       location: "San Jose, CA, USA",
    //       description:
    //         "Improving ads ranking models on the core TikTok product. Experience working on modeling two-tower architectures like DeepFM, Wide & deep learning, etc. Working on Large Language Models (LLM) pretraining and Large Multi-modal Model (LMM) finetuning strategies.",
    //       color: "#000000",
    //     },
    //     // {
    //     //   title: "Machine Learning Intern",
    //     //   company: "TikTok Inc.",
    //     //   company_url: "https://www.tiktok.com/en/",
    //     //   logo_path: "tiktok_logo.png",
    //     //   duration: "May 2022 - Aug 2022",
    //     //   location: "San Francisco, USA",
    //     //   description:
    //     //     "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
    //     //   color: "#000000",
    //     // },
    //     // {
    //     //   title: "Data Science Research Intern",
    //     //   company: "Delhivery Pvt. Ltd.",
    //     //   company_url: "https://www.delhivery.com/",
    //     //   logo_path: "delhivery_logo.png",
    //     //   duration: "May 2019 - Sept 2019",
    //     //   location: "Gurgaon, Haryana",
    //     //   description:
    //     //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //     //   color: "#ee3c26",
    //     // },
    //     // {
    //     //   title: "Data Science Intern",
    //     //   company: "Intel Indexer LLC",
    //     //   company_url:
    //     //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //     //   logo_path: "intel_logo.jpg",
    //     //   duration: "Nov 2018 - Dec 2018",
    //     //   location: "Work From Home",
    //     //   description:
    //     //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //     //   color: "#0071C5",
    //     // },
    //   ],
    // },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Student Placement Coordinator",
          company: "Medicaps University Indore, Madhya Pradesh",
          company_url: "https://www.medicaps.ac.in/",
          logo_path: "mcu_logo.png",
          duration: "Aug 2024 - May 2025",
          location: "Indore, Madhya Pradesh",
          description:
            "As a Student Placement Coordinator, I am responsible for coordinating with companies for campus placements, organizing placement drives, and assisting students in their preparation for interviews. I work closely with the university's placement cell to ensure a smooth and successful placement process for all students.",
          color: "#4285F4",
        },
        {
          title: "National Service Scheme (NSS) Volunteer",
          company: "Medicaps University Indore, Madhya Pradesh",
          company_url: "https://www.instagram.com/medicaps_nss/",
          logo_path: "nss_logo.png",
          duration: "March 2022 - May 2024",
          location: "Indore, Madhya Pradesh",
          description:
            "As an NSS Volunteer, being the Photography Head ,  I actively participated in various social initiatives, including organizing blood donation camps, tree plantation drives, and awareness campaigns. I contributed to community development projects and worked towards fostering social responsibility among students.",
          color: "#34A853",
        },
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        // {
        //   title: "Developer Program Member",
        //   company: "Github",
        //   company_url: "https://github.com/",
        //   logo_path: "github_logo.png",
        //   duration: "July 2019 - PRESENT",
        //   location: "Work From Home",
        //   description:
        //     "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
        //   color: "#181717",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Dynamic Web Based  projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "nimishlogo.png",

    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    // title: "Blogs",
    // subtitle:
    //   "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    // link: "https://blogs.NimishSahu.com/",
    // avatar_image_path: "blogs_image.svg",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9109576822",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    subtitle: "Silicon City, Indore, MP, India",
    locality: "Indore",
    country: "India",
    region: "Madhya Pradesh",
    postalCode: "452012",
    streetAddress: "Silicon City",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/qs6mU672kGUgiP4B9",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
