import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  GitHubIcon,
  NextJsIcon,
  ReactIcon,
  TailwindCSSIcon,
  ShadcnUIIcon,
  TypeScriptIcon,
} from "developer-icons";
import { Icon, IconList } from "../icons/icon";
import { Code } from "lucide-react";
import { Button } from "../ui/button";

export interface PortfolioCardProps {}

export const PortfolioCard: React.FC<PortfolioCardProps> = () => {
  return (
    <Card className={cn("row-span-2 col-span-2")}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-medium">This Portfolio</CardTitle>
        <Code className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="h-full">
        <CardDescription>
          is built with Next.js, React, Tailwind & shadcn/ui
        </CardDescription>

        <div className="flex gap-2">
          <IconList
            icons={[
              { name: "TypeScript", icon: TypeScriptIcon },
              { name: "React", icon: ReactIcon },
              { name: "Next.js", icon: NextJsIcon },
              { name: "Tailwind CSS", icon: TailwindCSSIcon },
              { name: "shadcn/ui", icon: ShadcnUIIcon },
            ]}
          />
        </div>

        <Button>GitHub</Button>
      </CardContent>
    </Card>
  );
};
