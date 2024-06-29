import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ThemeToggle } from "../ui/theme";

export interface SettingsCardProps {}

export const SettingsCard: React.FC<SettingsCardProps> = () => {
  return (
    <Card className="flex flex-col gap-4  col-span-2 row-span-2">
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <ThemeToggle />
      </CardHeader>
    </Card>
  );
};
