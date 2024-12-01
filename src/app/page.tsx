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

export default function Home() {
  return (
    <main className="flex md:h-screen w-screen flex-col p-4">
      <div className="fixed inset-0 bg-[url('/background.png')] bg-cover bg-center h-screen w-screen z-0" />
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
          <ProjectsCard />
          <SkillsCard />
          <WorkingOnCard />
          <TitleCard />
          <EmploymentCard />
          <PortfolioCard />
          <EducationCard />
          <SocialsCard />
          <StatsCards />
        </div>
      </div>
    </main>
  );
}
