import { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { MouseEventHandler, ReactNode, RefObject } from "react";

export interface CoreComponentsProps {
  children: ReactNode;
  classNames?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  id?: string;
  elementRef?: RefObject<HTMLDivElement>;
}

export interface ISocialLinkItem {
  url: string;
  icon: IconProp;
  text: string;
  name?: string;
}

export interface IExperienceItemDescription {
  text: string,
  bullets: string[] 
}

export interface IExperienceItem {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  isCurrentJob: boolean;
  location: string;
  description: IExperienceItemDescription[];
}

export interface INavItem {
  name: string;
  link: string;
  icon: IconProp;
}

export interface ISkillListItem {
  title: string;
  items: ISkillItem[];
}

export interface ISkillItem {
  title: string;
  icon: string;
}

export enum RepoType {
  Public,
  Private,
}

export enum ProjectType {
  Personal,
  JobWork,
  Freelance,
}

export interface IProjectItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  repoType: RepoType;
  projectType?: ProjectType;
  githubUrl?: string;
  url?: string;
  tags?: string[];
  sceenshots?: string[];
  about?: string;
}