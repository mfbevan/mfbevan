import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { GraduationCap } from "lucide-react";
import { Typography } from "../ui/typography";
import { ControlledCard } from "./controlled-card";
import { useCardLayout } from "../hooks/use-card-layout";

export interface EducationCardProps {}

export const EducationCard: React.FC<EducationCardProps> = () => {
  const { isOpen } = useCardLayout("education");

  return (
    <div className={cn("row-span-2 col-span-4")}>
      <ControlledCard
        card="education"
        className="flex flex-col gap-4 text-left"
        whenOpen="h-[200%] top-[-100%]"
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-medium">Education</CardTitle>
          <GraduationCap className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
      </ControlledCard>
    </div>
  );
};
