import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ControlledCard } from "./controlled-card";
import { FolderKanban } from "lucide-react";

export interface ProjectsCardProps {}

export const ProjectsCard: React.FC<ProjectsCardProps> = () => {
  return (
    <div className={cn("col-span-6 row-span-2")}>
      <ControlledCard
        card="projects"
        className="flex flex-col gap-4 text-left"
        whenOpen="h-[200%]"
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-medium">Projects</CardTitle>
          <FolderKanban className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent>
          <CardDescription>These are some projects</CardDescription>
        </CardContent>
      </ControlledCard>
    </div>
  );
};
