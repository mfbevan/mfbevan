import { cn } from "@/lib/utils";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { ControlledCard } from "./controlled-card";
import { FolderKanban } from "lucide-react";
import Image from "next/image";
import { Typography } from "../ui/typography";

export interface ProjectsCardProps {}

export const ProjectsCard: React.FC<ProjectsCardProps> = () => {
  return (
    <div className={cn("col-span-6 row-span-2")}>
      <ControlledCard
        card="projects"
        className="flex flex-col gap-4 text-left"
        whenOpen="h-[200%]"
      >
        <CardHeader className="flex flex-row items-center justify-between pb-0">
          <CardTitle className="font-medium">Projects</CardTitle>
          <FolderKanban className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent className="">
          <div className="flex gap-4">
            <Project
              title="Eth Jump"
              description="Building full stack React, TypeScript, Next.js, Node.js applications"
              image="/ethjump.svg"
              url="https://www.ethjump.xyz"
            />

            <Project
              title="Portfolio"
              description=""
              image="/logo.svg"
              url="https://mfbevan.com"
            />

            <Project
              title="Eth Dash"
              description=""
              image="/ethdash.svg"
              url="https://ethdash.xyz"
            />

            <Project
              title="MEV Watch"
              description=""
              image="/mevwatch.png"
              url="https://mevwatch.info"
            />

            <Project
              title="Scuderia"
              description=""
              image="/scuderia.png"
              url="https://scuderia.mfbevan.com"
            />
          </div>
        </CardContent>
      </ControlledCard>
    </div>
  );
};

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  url?: string;
  github?: string;
}

export const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  url,
}) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <Image
        src={image}
        alt={title}
        width={80}
        height={80}
        className="rounded-xl"
      />

      <Typography effect="muted">{title}</Typography>
    </div>
  );
};
