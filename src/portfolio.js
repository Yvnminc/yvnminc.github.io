/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Yanming Guo",
  logo_name: "Yanming Guo",
  nickname: "Hi! Here's Yann👋🏻",
  subTitle:
    "Hi, there! I am Yanming, a Hip Hop dancer, photographer and AI Researcher committed to applying mathematical models to devise practical solutions for pressing real-world challenges. My current research areas encompass Biomedical Computer Vision and Causal Inference in Environmental Economics. Strive to transform abstract mathematical concepts into these domains.",
  resumeLink:
    "https://drive.google.com/file/d/1ecfeM8pNH7aLELi5EINHrX8-jY5Uqb0q/view?usp=sharing",
  portfolio_repository: "https://github.com/Tasin5541",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Tasin5541",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/miftaul-mannan-tasin-566543107/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link:
      "https://www.youtube.com/channel/UClvrUclYSGX_MZPOF6ySG6A?view_as=subscriber",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link:
      "https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=tasinmiftaulmannan@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Hello",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  /*
  {
    name: "Stackoverflow",
    link: "https://stackoverflow.com/users/14167873/jongi95",
    fontAwesomeIcon: "fa-stack-overflow", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#FE7A16", // Reference https://simpleicons.org/?q=twitter
  },
  */
  {
    name: "Facebook",
    link: "https://www.facebook.com/tasinmiftaulmannan",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/mm_tasin/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Hands on real-world data with serveral EDA experience.",
        "⚡ Confident in applying interactive visualisation tools such as Tableau, Matlibplot, Plotly, NetworkX.",
        "⚡ Research in Deep Nueral Nework from BioMedical Imaging Domain, proposed AUtO-Net for segmentation with SOTA performance.",
        "⚡ Research in developing efficient Computer Vision Models with the fusion of CNNs and Transformers.",
        "⚡ Experince in Reinforcement Learning and Natural Language Processing (See GitHub Projects).",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Build CRM software as Captone project with functions such as customer relationship management, email notification.",
        "⚡ Implementing protype of HTTP server with C.",
        "⚡ Developing software based on OOSD patterns and principles by SrpingBoost framework.",
        "⚡ Front-end design by JavaScript.",
        "⚡ Experience working on IOS apps.",
        "⚡ Knowledge on several SDKs & APIs and deplyments.",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: ".Net Core",
          fontAwesomeClassname: "mdi:dot-net",
          style: {
            color: "#5C2D91",
          },
        },
      ],
    },
    // {
    //   title: "App Development",
    //   fileName: "AndroidImg",
    //   skills: [
    //     "⚡ Experience working on Android apps",
    //     "⚡ Knowledge on several SDKs & APIs",
    //     "⚡ Deploying Firebase based apps for secure accessing of information from anywhere",
    //     "⚡ Adapting new Material Design principles for a more refined look",

    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "GCP",
    //       fontAwesomeClassname: "simple-icons:googlecloud",
    //       style: {
    //         color: "#4285F4",
    //       },
    //     },
    //     {
    //       skillName: "Android Studio",
    //       fontAwesomeClassname: "mdi:android-studio",
    //       style: {
    //         color: "#3DDC84",
    //       },
    //     },
    //     {
    //       skillName: "VS",
    //       fontAwesomeClassname: "mdi:microsoft-visual-studio",
    //       style: {
    //         color: "#5C2D91",
    //       },
    //     },
    //     {
    //       skillName: "Firebase",
    //       fontAwesomeClassname: "simple-icons:firebase",
    //       style: {
    //         color: "#FFCA28",
    //       },
    //     },
    //     {
    //       skillName: "Gradle",
    //       fontAwesomeClassname: "simple-icons:gradle",
    //       style: {
    //         color: "#02303A",
    //       },
    //     },
    //     {
    //       skillName: "Java",
    //       fontAwesomeClassname: "simple-icons:java",
    //       style: {
    //         color: "#007396",
    //       },
    //     },
    //     {
    //       skillName: "ADB",
    //       fontAwesomeClassname: "ic:outline-adb",
    //       style: {
    //         color: "#3DDC84",
    //       },
    //     },
    //     {
    //       skillName: "Eclipse",
    //       fontAwesomeClassname: "simple-icons:eclipseide",
    //       style: {
    //         color: "#2C2255",
    //       },
    //     },
    //   ],
    // },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "90%",
    },
  ],
};

//Language Skill
const sLanguage = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "C/C++/C#",
      progressPercentage: "80%",
    },
    {
      Stack: "Java", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "JavaScript/TypeScript",
      progressPercentage: "60%",
    },
    {
      Stack: "R",
      progressPercentage: "60%",
    },
    // {
    //   Stack: "React",
    //   progressPercentage: "60%",
    // },
    {
      Stack: "SQL/PLSQL",
      progressPercentage: "60%",
    },

    {
      Stack: "Google Colab",
      progressPercentage: "90%",
    },

    {
      Stack: "Tableau",
      progressPercentage: "80%",
    },

    {
      Stack: "VS Code",
      progressPercentage: "90%",
    },

    {
      Stack: "Microsoft Office",
      progressPercentage: "70%",
    },

    // {
    //   Stack: "HTML", //Insert stack or technology you have experience in
    //   progressPercentage: "90%", //Insert relative proficiency in percentage
    // },
    // {
    //   Stack: "CSS",
    //   progressPercentage: "80%",
    // },
    // {
    //   Stack: "Bootstrap",
    //   progressPercentage: "80%",
    // },
    // {
    //   Stack: "PHP",
    //   progressPercentage: "70%",
    // },
    // {
    //   Stack: ".Net Core",
    //   progressPercentage: "65%",
    // },
  ],
};

//Tools Skill
const tools = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Visual Studio", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Visual Studio Code", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Google Colab",
      progressPercentage: "95%",
    },
    {
      Stack: "Code::Blocks",
      progressPercentage: "90%",
    },
    {
      Stack: "Android Studio", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Netbeans",
      progressPercentage: "80%",
    },
    {
      Stack: "Microsoft Office",
      progressPercentage: "90%",
    },
    {
      Stack: "Google Docs",
      progressPercentage: "90%",
    },
    {
      Stack: "Oracle Database", //Insert stack or technology you have experience in
      progressPercentage: "70%", //Insert relative proficiency in percentage
    },
    {
      Stack: "MS SQL Server", //Insert stack or technology you have experience in
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Firebase", //Insert stack or technology you have experience in
      progressPercentage: "60%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Github",
      progressPercentage: "80%",
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  degrees2: [
    {
      title: "Univeristy of Melbourne",
      subtitle1: "B.Sc. in Computer Science",
      subtitle2: "Diploma in Mathematical Science",
      logo_path: "unimelb.jpg",
      alt_name: "IIITDM Kurnool",
      duration: "2019 - 2022",
      cgpa: "73.5 / 100",
      descriptions: [
        "- Achieved the Concurrent Degree (Double Major) in Computer Sicence and Statistics.",
        "- Have a solid knowledge background in AI-related subject, technically and theoratically.",
        "- Confident in using all kinds of programming languages such as Python, Java, C and software development principle with mulitple hands on projects.",
        "- Thorough understanding of mathematical theories such as Probability, Statistics, Graph Theory", 

        // "Handed on various APP development project:",
        // "-- AI agent developing for adversial game", 
        // "-- Machine Leanring driven EDA",
        // "-- Card-play Software Development", 
        // "-- Deadlock Process Dectetion Algorithm Development", 
        // "-- HTML Sever Development in C", 
        // "-- CRM Full Stack Development for Capstone Project in Java.",
      ],
      website_link: "http://aust.edu/",
    },
  ],

  degrees1: [
    {
      title: "Univeristy of Sydney",
      subtitle1: "B.Sc. (Honours) in Data Science",
      subtitle2: "Ph.D in Engineering and IT (Current Studying)",
      logo_path: "usyd.jpg",
      alt_name: "IIITDM Kurnool",
      duration: "2022 - now",
      cgpa: "90 / 100",
      descriptions: [
        "- Top 3% student in the faculty in ranking the WAM.",
        "- Nearly Medal.",
        "- Goes deeper in the Machine Learning topics, such as noise-labelling, and deep learning.",
        "- Confident in applying modern data analysis tools such as Pytorch, TensorFlow, Keras.",
        "- Ranked 2sd in COMP5329 Kaggle completion with 150 teams.",
        "- Research in Medical Image Segementation under supervision of Prof. Weidong Cai.",
        "- Research in landing AI in economic and sustainability under supervision of Prof. Jin Ma."

        // "Handed on various APP development project:",
        // "-- AI agent developing for adversial game", 
        // "-- Machine Leanring driven EDA",
        // "-- Card-play Software Development", 
        // "-- Deadlock Process Dectetion Algorithm Development", 
        // "-- HTML Sever Development in C", 
        // "-- CRM Full Stack Development for Capstone Project in Java.",
      ],
      website_link: "http://aust.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python Data Structures",
      subtitle: "- Charles Russell Severance",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://coursera.org/share/259bcebba35c1ba43934608a5fab9907",
      alt_name: "Michigan University",
      color_code: "#2A73CC",
    },
    {
      title: "Python Basics",
      subtitle: "- Charles Russell Severance",
      logo_path: "michigan_logo.png",
      certificate_link:
        "https://coursera.org/share/39d3749b06308a77e0f596129029d4fe",
      alt_name: "Michigan University",
      color_code: "#2A73CC",
    },

    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am a fresh graduate with experience gained from voluntary works on sites like stackoverflow, github.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        /*
		{
          title: "Associate AI Engineer",
          company: "Legato Health Technology",
          company_url: "https://legatohealthtech.com/",
          logo_path: "legato_logo.png",
          duration: "June 2020 - PRESENT",
          location: "Hyderabad, Telangana",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: "Android and ML Developer",
          company: "Muffito Incorporation",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "muffito_logo.png",
          duration: "May 2018 - Oct 2018",
          location: "Pune, Maharashtra",
          description:
            "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
          color: "#9b1578",
        },
        {
          title: "Android Developer",
          company: "FreeCopy Pvt. Ltd.",
          company_url: "https://www.linkedin.com/company/freecopy/about/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - Dec 2017",
          location: "Ahmedabad, Gujarat",
          description:
            "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
          color: "#fc1f20",
        },
		*/
      ],
    },
    {
      title: "Internships",
      experiences: [
        /*
        {
          title: "Data Science Research Intern",
          company: "Delhivery Pvt. Ltd.",
          company_url: "https://www.delhivery.com/",
          logo_path: "delhivery_logo.png",
          duration: "May 2019 - Sept 2019",
          location: "Gurgaon, Haryana",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Data Science Intern",
          company: "Intel Indexer LLC",
          company_url:
            "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
          logo_path: "intel_logo.jpg",
          duration: "Nov 2018 - Dec 2018",
          location: "Work From Home",
          description:
            "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
          color: "#0071C5",
        },
		*/
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        /*
        {
          title: "Google Explore ML Facilitator",
          company: "Google",
          company_url: "https://about.google/",
          logo_path: "google_logo.png",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description:
            "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
          color: "#4285F4",
        },
        {
          title: "Microsoft Student Partner",
          company: "Microsoft",
          company_url: "https://www.microsoft.com/",
          logo_path: "microsoft_logo.png",
          duration: "Aug 2019 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
          color: "#D83B01",
        },
        {
          title: "Mozilla Campus Captain",
          company: "Mozilla",
          company_url: "https://www.mozilla.org/",
          logo_path: "mozilla_logo.png",
          duration: "Oct 2019 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
          color: "#000000",
        },
        {
          title: "Developer Students Club Member",
          company: "DSC IIITDM Kurnool",
          company_url:
            "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
          logo_path: "dsc_logo.png",
          duration: "Jan 2018 - May 2020",
          location: "Kurnool, Andhra Pradesh",
          description:
            "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
          color: "#0C9D58",
        },
		*/
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "September 2020 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects are mainly foucs on the AI agent development (eg,. Search-driven Chess-playing Agent, TD Reinforcement Learning), Machine Learning models (Proposed novel vision model named AUtO-Net for improving robustness of Medical Imaging Segmentation. Multi-layer Perceptron with NumPy impletement. Multi-model Mutli-label Classification ranked 2sd place in Kaggle Completion with 150 participants.), Software development (Customer Relationship Management App). And algorithm implementation (System deadlock detection and HTTP several algorithm in C)",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "yann.jpg",
    description:
      "Please contact me with email for Research of Interest, Programming, ML, AI.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I am planning to write something about philosophy of the daily life, AI, anything which I thought is interesting.",
    link: "https://miftaulmannan.wordpress.com/projects/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Victoria St, Melbourne, VIC, 3000, Australia",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/yV1Vkp7L3to9qvKX6",
  },
  phoneSection: {
    title: "Email",
    subtitle: "yvnminc@outlook",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  techStack,
  sLanguage,
  tools,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
