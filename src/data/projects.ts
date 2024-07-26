import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [{
    id: "myspil-com",
    title: "mySPIL.com",
    description:
      `The first digital platform for logistics industry in Indonesia. 
      This website provides various services, such as checking shipping schedules, create a booking request, 
      tracking container status and location, manage user booking and transactions, and many more. 
      Developed using CodeIgniter for frontend and Java for backend APIs.`,
    icon: "/skills/codeigniter.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "",
    url: "https://myspil.com/",
    tags: ["HTML", "CSS", "PHP", "CodeIgniter", "Bootstrap", "Java"],
    sceenshots: ["/screenshots/rippl.png"],
},{
    id: "myspil-reloaded",
    title: "mySPIL Reloaded",
    description:
      `The first Logistics Super App in Indonesia. 
      This mobile app provides services that are available in mySPIL.com. 
      In addition, this app also provide unique services such as Quick Booking, Quick Tracking, Call Customer Service, Notifications, and many more.   
      Developed using Flutter for frontend and Java for backend APIs.`,
    icon: "/skills/flutter.svg",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "",
    url: "https://play.google.com/store/apps/details?id=com.myspil_reloaded&hl=en",
    tags: ["Flutter", "Dart", "Java", "Firebase"],
    sceenshots: ["/screenshots/rippl.png"],
},
{
    id: "spildex",
    title: "SPILDex",
    description:
      "API Platform specifically designed to be used by SPIL Partner companies. Developed using Go",
    icon: "/skills/golang.png",
    repoType: RepoType.Private,
    projectType: ProjectType.JobWork,
    githubUrl: "",
    url: "https://myspil.com/spildex",
    tags: ["Go"],
}];

export default projects;