"use client";

import { BlogCard } from "@/components/cards/blog-card";
import { EducationCard } from "@/components/cards/education-card";
import { EmploymentCard } from "@/components/cards/employment-card";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { ProjectsCard } from "@/components/cards/projects-card";
import { SettingsCard } from "@/components/cards/settings-card";
import { SkillsCard } from "@/components/cards/skills-card";
import { SocialsCard } from "@/components/cards/socials-card";
import { StatsCards } from "@/components/cards/stats-cards";
import { TitleCard } from "@/components/cards/title-card";

export default function Home() {
  return (
    <main className="flex md:h-screen w-screen flex-col p-4">
      <div className="flex flex-col gap-4 md:hidden">
        <TitleCard />
        <SocialsCard />
        <SkillsCard />
        <ProjectsCard />
        <EmploymentCard />
        <EducationCard />
        <BlogCard />
        <PortfolioCard />
        <SettingsCard />
      </div>
      <div className="md:grid grid-cols-10 grid-rows-8 gap-4 h-full hidden">
        <BlogCard />
        <ProjectsCard />
        <SkillsCard />
        <TitleCard />
        <EmploymentCard />
        <PortfolioCard />
        <EducationCard />
        <SocialsCard />
        <StatsCards />
      </div>
    </main>
  );
}
