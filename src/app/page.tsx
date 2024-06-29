import { BlogCard } from "@/components/cards/blog-card";
import { EmploymentCard } from "@/components/cards/employment-card";
import { PlaceholderCard } from "@/components/cards/placeholder-card";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { ProjectsCard } from "@/components/cards/projects-card";
import { SettingsCard } from "@/components/cards/settings-card";
import { SkillsCard } from "@/components/cards/skills-card";
import { SocialsCard } from "@/components/cards/socials-card";
import { TitleCard } from "@/components/cards/title-card";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col p-4">
      <div className="grid grid-cols-10 grid-rows-8 gap-4 h-full">
        <BlogCard />
        <ProjectsCard />
        <SkillsCard />
        <TitleCard />
        <EmploymentCard />
        <PortfolioCard />
        <SocialsCard />
        <SettingsCard />
        <PlaceholderCard />
      </div>
    </main>
  );
}
