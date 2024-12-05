import { cn } from "@/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ThemeToggle } from "../ui/theme";

export interface SettingsCardProps {
  delay?: number;
}

export const SettingsCard: React.FC<SettingsCardProps> = ({ delay = 0 }) => {
  return (
    <Card
      className={cn("flex flex-col gap-4 w-full col-span-2 row-span-2")}
      transition={{ delay }}
    >
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <ThemeToggle />
      </CardHeader>
    </Card>
  );
};
