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
} from "developer-icons";
import { Icon } from "../icons/icon";

const ICON_SIZE = 24;

export interface PortfolioCardProps {}

export const PortfolioCard: React.FC<PortfolioCardProps> = () => {
  return (
    <Card className={cn("gap-4 row-span-2 col-span-2")}>
      <CardHeader>
        <CardTitle>This Portfolio</CardTitle>
        <CardDescription>
          Built with Next.js, React, Tailwind & shadcn/ui
        </CardDescription>
      </CardHeader>

      <CardContent className="flex gap-2">
        <Icon label="GitHub">
          <GitHubIcon className="w-full" />
        </Icon>
        <Icon label="React">
          <ReactIcon className="w-full" />
        </Icon>
        <Icon label="Next.js">
          <NextJsIcon className="w-full" />
        </Icon>
        <Icon label="Tailwind CSS">
          <TailwindCSSIcon className="w-full" />
        </Icon>
        <Icon label="shadcn/ui">
          <ShadcnUIIcon className="w-full" />
        </Icon>
      </CardContent>
    </Card>
  );
};
