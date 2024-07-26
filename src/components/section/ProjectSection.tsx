import ConstrainedBox from "@/components/core/ConstrainedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import SectionTitle from "@/components/core/SectionTitle";
import ProjectCarousel from "./ui/ProjectCarousel";
import projects from "@/data/projects";

const HomeSection5 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle> Projects </SectionTitle>

        <ProjectCarousel projects={projects} />
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection5;