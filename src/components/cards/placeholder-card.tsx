import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Typography } from "../ui/typography";

export interface PlaceholderCardProps {}

export const PlaceholderCard: React.FC<PlaceholderCardProps> = () => {
  return (
    <div className="col-span-2 row-span-2 flex flex-col gap-4">
      <Card className="flex flex-col items-center justify-center h-full">
        <Typography variant="h2">Placeholder</Typography>
      </Card>
      <Card className="flex flex-col items-center justify-center h-full">
        <Typography variant="h2">Placeholder</Typography>
      </Card>
    </div>
  );
};
