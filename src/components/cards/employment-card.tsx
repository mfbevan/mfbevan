import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Typography } from "../ui/typography";

export interface EmploymentCardProps {}

export const EmploymentCard: React.FC<EmploymentCardProps> = () => {
  return (
    <Card
      className={cn(
        "p-8 flex flex-col gap-4 text-center col-span-2 row-span-6"
      )}
    >
      <Typography variant="h2">Employment</Typography>
    </Card>
  );
};
