"use client";

import { EducationCard } from "@/components/cards/education-card";
import { EmploymentCard } from "@/components/cards/employment-card";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { ProjectsCard } from "@/components/cards/projects-card";
import { SkillsCard } from "@/components/cards/skills-card";
import { SocialsCard } from "@/components/cards/socials-card";
import { StatsCards } from "@/components/cards/stats-cards";
import { TitleCard } from "@/components/cards/title-card";
import { WorkingOnCard } from "@/components/cards/working-on-card";
import Particles from "@/components/ui/particles";

const scale = 1.5;

export default function Home() {
  return (
    <main className="flex md:h-screen w-screen flex-col p-4">
      <div className="fixed inset-0 bg-[url('/background.jpeg')] bg-cover bg-center h-screen w-screen z-0" />
      <Particles className="absolute inset-0" quantity={200} color="#4F4556" />
      <div className="flex h-full w-full max-w-[1500px] m-auto  max-h-[900px] flex-col">
        <div className="flex flex-col gap-4 md:hidden pb-4">
          <TitleCard />
          <SocialsCard />
          <WorkingOnCard />
          <SkillsCard />
          <ProjectsCard />
          <EmploymentCard />
          <EducationCard />
          <PortfolioCard />
        </div>
        <div className="md:grid grid-cols-10 grid-rows-8 gap-4 h-full hidden">
          <ProjectsCard delay={0.1 * scale} />
          <SkillsCard delay={0.2 * scale} />
          <WorkingOnCard delay={0.85 * scale} />
          <TitleCard delay={1.0 * scale} />
          <EmploymentCard delay={0.3 * scale} />
          <PortfolioCard delay={0.75 * scale} />
          <EducationCard delay={0.65 * scale} />
          <SocialsCard delay={0.5 * scale} />
          <StatsCards delay={0.4 * scale} />
        </div>
      </div>
    </main>
  );
}
