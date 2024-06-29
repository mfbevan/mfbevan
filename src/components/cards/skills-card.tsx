import { cn } from "@/lib/utils";
import { ControlledCard } from "./controlled-card";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  ReactIcon,
  NextJsIcon,
  TailwindCSSIcon,
  ShadcnUIIcon,
  HTML5Icon,
  JavaScriptIcon,
  TypeScriptIcon,
  SolidityIcon,
  CSS3Icon,
  MongoDBIcon,
  PostgreSQLIcon,
  MariaDBIcon,
  MySQLIcon,
  DockerIcon,
  KubernetesIcon,
  AWSIcon,
  GoogleCloudIcon,
  GitIcon,
  NestJSIcon,
  ReactQueryIcon,
  TRPCIcon,
  NodeJsIcon,
  MaterialUIIcon,
  JiraIcon,
  ThreeJsIcon,
  ChakraUIIcon,
  CSharpIcon,
  BunJsIcon,
  ChatGPTIcon,
  CloudflareIcon,
  CypressIcon,
  GitHubCopilotIcon,
  EC2Icon,
  ESLintIcon,
  FigmaIcon,
  GrafanaIcon,
  HomebrewIcon,
  BashIcon,
  JestIcon,
  MochaJSIcon,
  PostmanIcon,
  PrettierIcon,
  RadixUIIcon,
  RedisIcon,
  ReduxIcon,
  ServerlessIcon,
  SlackIcon,
  StorybookIcon,
  SwaggerIcon,
  VisualStudioCodeIcon,
  ZodIcon,
} from "developer-icons";
import { IconList } from "../icons/icon";
import { Typography } from "../ui/typography";
import { Code2 } from "lucide-react";
import { useCardLayout } from "../hooks/use-card-layout";

export interface SkillsCardProps {}

export const SkillsCard: React.FC<SkillsCardProps> = () => {
  const { isOpen } = useCardLayout("skills");

  return (
    <div className={cn("col-span-4 row-span-2")}>
      <ControlledCard
        card="skills"
        className="flex flex-col gap-4 text-left"
        whenOpen="h-[205%]"
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
          <CardTitle className="font-medium">Skills</CardTitle>
          <Code2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent className="flex flex-col gap-2 overflow-hidden mb-6">
          <Typography effect="muted">Languages</Typography>
          <div className="flex flex-wrap gap-2">
            <IconList icons={languages} />
          </div>

          <Typography effect="muted">Frameworks</Typography>
          <div className="flex flex-wrap gap-2">
            <IconList icons={frameworks} />
          </div>

          <Typography effect="muted">Database</Typography>
          <div className="flex flex-wrap gap-2">
            <IconList icons={databases} />
          </div>

          <Typography effect="muted">DevOps</Typography>
          <div className="flex flex-wrap gap-2">
            <IconList icons={devops} />
          </div>

          <Typography effect="muted">Tools & Services</Typography>
          <div className="flex flex-wrap gap-2">
            <IconList icons={tools} />
          </div>
        </CardContent>

        <Typography
          effect="tiny"
          className={cn(
            "text-center absolute bottom-2 w-full transition-all ease",
            {
              "opacity-0": isOpen,
            }
          )}
        >
          Click to see more
        </Typography>
      </ControlledCard>
    </div>
  );
};

const languages = [
  { name: "HTML5", icon: HTML5Icon },
  { name: "CSS", icon: CSS3Icon },
  { name: "JavaScript", icon: JavaScriptIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "Solidity", icon: SolidityIcon },
  { name: "C#", icon: CSharpIcon },
];

const frameworks = [
  { name: "Node", icon: NodeJsIcon },
  { name: "React", icon: ReactIcon },
  { name: "Next.js", icon: NextJsIcon },
  { name: "Tailwind CSS", icon: TailwindCSSIcon },
  { name: "Radix UI", icon: RadixUIIcon },
  { name: "shadcn/ui", icon: ShadcnUIIcon },
  { name: "Material UI", icon: MaterialUIIcon },
  { name: "Chakra UI", icon: ChakraUIIcon },
  { name: "NestJS", icon: NestJSIcon },
  { name: "React Query", icon: ReactQueryIcon },
  { name: "TRPC", icon: TRPCIcon },
  { name: "Three.js", icon: ThreeJsIcon },
  { name: "Bun.js", icon: BunJsIcon },
  { name: "Cypress", icon: CypressIcon },
  { name: "ESLint", icon: ESLintIcon },
  { name: "Jest", icon: JestIcon },
  { name: "Mocha", icon: MochaJSIcon },
  { name: "Redux", icon: ReduxIcon },
  { name: "Prettier", icon: PrettierIcon },
  { name: "Storybook", icon: StorybookIcon },
  { name: "Zod", icon: ZodIcon },
];

const databases = [
  { name: "MongoDB", icon: MongoDBIcon },
  { name: "PostgreSQL", icon: PostgreSQLIcon },
  { name: "MariaDB", icon: MariaDBIcon },
  { name: "MySQL", icon: MySQLIcon },
];

const devops = [
  { name: "Git", icon: GitIcon },
  { name: "Docker", icon: DockerIcon },
  { name: "Kubernetes", icon: KubernetesIcon },
  { name: "AWS", icon: AWSIcon },
  { name: "Google Cloud", icon: GoogleCloudIcon },
  { name: "Cloudflare", icon: CloudflareIcon },
  { name: "EC2", icon: EC2Icon },
  { name: "Grafana", icon: GrafanaIcon },
  { name: "Redis", icon: RedisIcon },
  { name: "Serverless", icon: ServerlessIcon },
];

const tools = [
  { name: "Jira", icon: JiraIcon },
  { name: "ChatGPT", icon: ChatGPTIcon },
  { name: "GitHub Copilot", icon: GitHubCopilotIcon },
  { name: "Figma", icon: FigmaIcon },
  { name: "Homebrew", icon: HomebrewIcon },
  { name: "Bash", icon: BashIcon },
  { name: "Postman", icon: PostmanIcon },
  { name: "Slack", icon: SlackIcon },
  { name: "Swagger", icon: SwaggerIcon },
  { name: "Visual Studio Code", icon: VisualStudioCodeIcon },
];
