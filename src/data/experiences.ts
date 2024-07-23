import { IExperienceItem } from "@/types";

const experiences: IExperienceItem[] = [
  {
    jobTitle: "Software Engineer",
    company: "Salam Pacific Indonesia Lines (SPIL)",
    startDate: "Mar 2021",
    endDate: "",
    isCurrentJob: true,
    location: "Surabaya, Indonesia. On-site",
    description: [{
      "text": `SPIL is the largest container shipping company in Indonesia. In here, I have developed many web and mobile applications using modern tech stacks and applied my excellent problem 
        solving technique to integrate complex shipping and logistics business processes into user ready applications. Some of my works in SPIL: `,
      "bullets": ["Fullstack developer of 'mySPIL' website and 'mySPIL Reloaded' mobile app.",
        "Developed API platform 'SPILDEX' and created a custom API Gateway.",
        "Created a real time data streaming for monitoring dashboard.",
        "Spearheaded the development of AI and created a chatbot that can answer various question about SPIL, including tracking, schedule, and help user book a shipment."]
    },{
      "text": `In addition to my software engineering skills, I've also showed my dedication to always deliver the best performance at work and follow the
      core values of the company. This dedication is reflected by the achievement and award that I got while working: `,
      "bullets": ["Winner of SPIL Hackathon 2024.",
        "Awarded with 'Green Star 2023' as one of the best performing employee in the company.",
        "Awarded with 'Rising Star' in 2021 as the top new employee for IT division.",]
    }]
  },
  {
    jobTitle: "Full-Stack Developer",
    company: "Ahlinya Teknologi Mandiri",
    startDate: "Mar 2020",
    endDate: "Sep 2020",
    isCurrentJob: false,
    location: "Surabaya, Indonesia. On-site",
    description: [{
      "text": `As the fullstack developer of a rising tech startup, I had the invaluable opportunity to make a significant impact by
        using my deep software engineering skill and knowledge to accelerate the development of an e-commerce mobile app. I played a pivotal role in 
        deploying APIs, enabling seamless integration between app and server, enhancing overall app functionality and performance. Furthermore, I was
        trusted to lead the development of a e-sports website with small team of 4. Some of my works: `,
      "bullets": ["Fullstack developer of 'Ahlinya.id', an e-commerce app aimed to provide household services.",
        "Lead the development of 'Varena', a dedicated esport website where professional players can compete."
      ]
    }]
  },
  
];

export default experiences;