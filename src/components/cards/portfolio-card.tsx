import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Typography } from "../ui/typography";
export interface PortfolioCardProps {}

export const PortfolioCard: React.FC<PortfolioCardProps> = () => {
  return (
    <Card
      className={cn(
        "p-8 flex flex-col gap-4 text-center row-span-2 col-span-2"
      )}
    >
      <Typography variant="h2">Portfolio</Typography>
    </Card>
  );
};
