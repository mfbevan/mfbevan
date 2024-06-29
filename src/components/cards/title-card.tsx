import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Typography } from "../ui/typography";

export interface TitleCardProps {}

export const TitleCard: React.FC<TitleCardProps> = () => {
  return (
    <Card
      className={cn(
        "p-8 flex flex-col gap-4 text-center col-span-6 row-span-4"
      )}
    >
      <Typography variant="h1" className="text-6xl">
        Matthew Bevan
      </Typography>
      <Typography variant="h3">Software Engineer</Typography>
    </Card>
  );
};
