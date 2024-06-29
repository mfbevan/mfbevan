import { Card } from "../ui/card";
import { Typography } from "../ui/typography";

export interface SettingsCardProps {}

export const SettingsCard: React.FC<SettingsCardProps> = () => {
  return (
    <Card className="p-8 flex flex-col gap-4 text-center col-span-2 row-span-2">
      <Typography variant="h2">Settings</Typography>
    </Card>
  );
};
