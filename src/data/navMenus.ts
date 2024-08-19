import { INavItem} from "@/types";
import {
  faUser,
  faTimeline,
  faAward,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";

export const menuItems: INavItem[] = [
  {
    name: "About",
    link: "/#about",
    icon: faUser,
  },
  {
    name: "Experiences",
    link: "/#experiences",
    icon: faTimeline,
  },
  {
    name: "Skills",
    link: "/#skills",
    icon: faAward,
  },
  {
    name: "Projects",
    link: "/#projects",
    icon: faLaptopCode,
  }
];