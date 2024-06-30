import { cn } from "@/lib/utils";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { ThemeToggle } from "../ui/theme";

export interface SettingsCardProps {}

export const SettingsCard: React.FC<SettingsCardProps> = () => {
  return (
    <Card
      className={cn(
        "flex flex-col gap-4 w-full col-span-2 row-span-2"
        // "animate-border inline-block bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1"
      )}
    >
      <CardHeader>
        <CardTitle>Settings</CardTitle>
        <ThemeToggle />
      </CardHeader>
    </Card>
  );
};
