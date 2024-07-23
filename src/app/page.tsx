import dynamic from "next/dynamic";
import PageBox from "@/components/core/PageBox";
import { menuItems } from "@/data/navMenus";

import FrontSection from "@/components/section/FrontSection";
import ExperienceSection from "@/components/section/ExperienceSection";
import SkillSection from "@/components/section/SkillSection";

const FloatingNavbar = dynamic(() => import("@/components/navbar/FloatingNavbar"));

export default function Home() {
  return (
    <PageBox>
      <FloatingNavbar className="app_nav" navItems={menuItems} />
      <FrontSection id="hero" />
      <ExperienceSection id="experiences" />
      <SkillSection id="skills" />
    </PageBox>
  );
}
