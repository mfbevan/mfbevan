import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Typography } from "../ui/typography";

export interface SkillsCardProps {}

export const SkillsCard: React.FC<SkillsCardProps> = () => {
  return (
    <Card
      className={cn(
        "p-8 flex flex-col gap-4 text-center col-span-4 row-span-2"
      )}
    >
      <Typography variant="h2">Skills</Typography>
    </Card>
  );
};
