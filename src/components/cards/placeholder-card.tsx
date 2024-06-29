import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Typography } from "../ui/typography";

export interface PlaceholderCardProps {}

export const PlaceholderCard: React.FC<PlaceholderCardProps> = () => {
  return (
    <>
      <Card className="col-span-2 row-span-1 flex flex-col items-center justify-center">
        <Typography variant="h2">Placeholder</Typography>
      </Card>
      <Card className="col-span-2 row-span-1 flex flex-col items-center justify-center">
        <Typography variant="h2">Placeholder</Typography>
      </Card>
    </>
  );
};
