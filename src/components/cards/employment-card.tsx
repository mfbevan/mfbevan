import { cn } from "@/lib/utils";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { ControlledCard } from "./controlled-card";
import { BriefcaseBusiness } from "lucide-react";
import { Typography } from "../ui/typography";
import { Separator } from "../ui/separator";
import { useCardLayout } from "../hooks/use-card-layout";

export interface EmploymentCardProps {}

export const EmploymentCard: React.FC<EmploymentCardProps> = () => {
  return (
    <div className={cn("col-span-2 row-span-6")}>
      <ControlledCard
        card="employment"
        className="flex flex-col gap-4 text-left"
        whenOpen="h-full w-[250%] left-[-150%]"
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-medium">Experience</CardTitle>
          <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent className="flex flex-col gap-4 overflow-scroll md:mb-8">
          <EmploymentItem
            company="Labrys"
            date="Since March 2022"
            title="Senior Blockchain Engineer"
            description="I currently work as a Senior Blockchain and Full Stack Software Engineer at Australia's largest Blockchain Development agency, tackling problems in both the Web 2.0 and Web 3.0 world, developing smart contract and web applications to support them. I have particular skills in Solidity, Hardhat, Ethers.js, Web3.js, ThirdWeb and Alchemy services for smart contract development, as well as Next.js, React, TypeScript, Node.js, MongoDB experience for building full-stack Web3 applications. Continued areas of research "
          />

          <Separator />

          <EmploymentItem
            company="Optizmo Technologies, LLC"
            date="June 2021 - March 2022"
            title="Full-Stack Developer"
            description="Completing tasks across the Full Stack including Typescript React development on the Frontend, a Typescript Node.js backend, Terraform infrastructure as code, and PostgreSQL databases where I also gained experience in CI/CD pipelines and Test-Driven Development and Behaviour-Driven Development. This job took place in an Agile environment with daily standups, weekly task grooming sessions and fulfilling a number of rotating roles each sprint. This included many positions including Sprint Boss (Scrum Master), Tech Support (replying to client queries and concerns and raising bugs appropriately), Alarms Monitoring (monitoring our deployed services) and Sprint Review (managing a bi-weekly sprint review to assess progress)."
          />

          <Separator />

          <EmploymentItem
            company="Foundation Society"
            date="March 2021 - November 2021"
            title="Full-Stack Developer"
            description="For my final year Capstone Project, myself and a 3 like-minded developers set out to create a Competition Portal for the Australian Space Design Competition (ASDC), a competition for secondary school students with a passion for space. The portal that we developed allowed students to sign up to the competition, for teachers to manager their teams, and for the competition staff to manage student and team data, including generating reports for accomodation, team submissions, and contact information. We also developed a submissions portal using AWS S3 where competition staff could create a new deliverable, to which individual students or teams could make submissions such as sign-up forms, and their final reports for the competition. The technologies I was exposed to in this project included a React Frontend, MariaDB database and AWS SAM Serverless API written in Python, where we used AWS Lambda to create a scalable serverless infrastructure that was low cost for the ASDC."
          />

          <Separator />

          <EmploymentItem
            company="Hogan's Wellington Point Hotel"
            date="March 2021 - November 2021"
            title="Duty Manager & Bar Manager"
            description="Bar management, financial management, event planning, overseeing of daily operations, administration, security, customer service, excellent time management & communication, conflict resolution skills"
          />
        </CardContent>
      </ControlledCard>
    </div>
  );
};

const EmploymentItem: React.FC<{
  title: string;
  company: string;
  description: string;
  date: string;
}> = ({ title, company, description, date }) => {
  const { isOpen } = useCardLayout("employment");

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <Typography variant="h4" className="font-semibold leading-6">
          {title}
        </Typography>
        {isOpen && (
          <Typography className="text-xs opacity-50">{date}</Typography>
        )}
      </div>
      <Typography className="font-sm text-muted-foreground tracking-tight leading-4">
        {company}
      </Typography>
      <Typography
        className={cn("pt-2", {
          "md:line-clamp-4": !isOpen,
        })}
        effect="tiny"
      >
        {description}
      </Typography>
    </div>
  );
};
