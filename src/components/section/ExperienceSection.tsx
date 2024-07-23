import ConstrainedBox from "@/components/core/ConstrainedBox";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import GridBox from "@/components/core/GridBox";
import SectionTitle from "@/components/core/SectionTitle";
import ExperienceItem from "./ui/ExperienceItem";
import experiences from "@/data/experiences";

const ExperienceSection = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--dialogColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Experiences</SectionTitle>
        <GridBox classNames="justify-items-center grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mt-16">
          {experiences.map((experience, index) => {
            return (
              <ExperienceItem key={`experience-${index}`} data={experience} />
            );
          })}
        </GridBox>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default ExperienceSection;