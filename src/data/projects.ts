import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [{
    id: "forwarder-ai",
    title: "forwarder.ai",
    description:
      `AI driven digital freight forwarding website that provides a range of logistics services.
      Also contain a comprehensive LLM Chatbot called Forsiva that can help user make a booking request and answer company / logistics related questions.`,
    icon: "/skills/codeigniter.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "",
    url: "https://forwarder.ai/",
    tags: ["CodeIgniter", "Bootstrap", "Go", "Typescript", "Langchain"]
  },{
    id: "myspil-com",
    title: "mySPIL.com",
    description:
      `The first digital platform for logistics industry in Indonesia. 
      This website provides various services, such as checking shipping schedules, create a booking request, 
      tracking container status and location, manage user booking and transactions, and many more. `,
    icon: "/skills/codeigniter.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "",
    url: "https://myspil.com/",
    tags: ["HTML", "CSS", "PHP", "CodeIgniter", "Bootstrap", "Java"]
},{
    id: "myspil-reloaded",
    title: "mySPIL Reloaded",
    description:
      `The first Logistics Super App in Indonesia. 
      This mobile app provide unique services such as Quick Booking, Quick Tracking, Call Customer Service, Notifications, and many more.`,
    icon: "/skills/flutter.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "",
    url: "https://play.google.com/store/apps/details?id=com.myspil_reloaded&hl=en",
    tags: ["Flutter", "Dart", "Typescript", "ExpressJS", "Firebase"]
},{
  id: "spil-organizer",
  title: "SPIL Organizer",
  description:
    `SPIL internal apps for employees to manage everyday work. 
    Contain various features like online checklog, point redeem, and e-learning.  
    Developed using Flutter for frontend and ExpressJS for backend APIs.`,
  icon: "/skills/flutter.svg",
  repoType: RepoType.Private,
  projectType: ProjectType.JobWork,
  githubUrl: "",
  url: "https://play.google.com/store/apps/details?id=com.spil.organiser&hl=en",
  tags: ["Flutter", "Dart", "Typescript", "ExpressJS", "Firebase"]
},{
    id: "spildex",
    title: "SPILDex",
    description:
      "API Platform specifically designed to be used by SPIL Partner companies. ",
    icon: "/kristianhlm.github.io/skills/golang.png",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "",
    url: "https://myspil.com/spildex",
    tags: ["Go"],
},{
  id: "kafka-wss",
  title: "Kafka WSS",
  description:
    `Simple boilerplate for Kafka Sink (Receiver) using KafkaJS combined with websocket. 
    Can handle multiple websocket connection with multiple different Kafka topics.`,
  icon: "/skills/apache-kafka.png",
  repoType: RepoType.Public,
  projectType: ProjectType.Personal,
  githubUrl: "https://github.com/kristianhlm/kafka-wss",
  url: "",
  tags: ["Typescript", "Apache Kafka"],
}];

export default projects;