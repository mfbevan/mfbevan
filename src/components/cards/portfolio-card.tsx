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
  ReactIcon,
  TailwindCSSIcon,
  ShadcnUIIcon,
  TypeScriptIcon,
} from "developer-icons";
import { IconList } from "../icons/icon";
import { Code } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

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

        <div className="flex justify-between gap-2 py-4">
          <IconList
            size={24}
            icons={[
              { name: "GitHub", icon: GitHubIcon },
              { name: "TypeScript", icon: TypeScriptIcon },
              { name: "React", icon: ReactIcon },
              { name: "Tailwind CSS", icon: TailwindCSSIcon },
              { name: "shadcn/ui", icon: ShadcnUIIcon },
            ]}
          />
        </div>

        <Link href="https://github.com/mfbevan/mfbevan" target="_blank">
          <Button className="gap-2 mx-auto hidden lg:flex" variant="outline">
            <GitHubIcon size={16} />
            View on GitHub
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};
