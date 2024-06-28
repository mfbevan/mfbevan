import { Card } from "../ui/card";
import { Typography } from "../ui/typography";

export interface TitleCardProps {}

export const TitleCard: React.FC<TitleCardProps> = () => {
  return (
    <Card className="p-8 flex flex-col gap-4 text-center">
      <Typography variant="h1" className="text-6xl">
        Matthew Bevan
      </Typography>
      <Typography variant="h3">Software Engineer</Typography>
    </Card>
  );
};
