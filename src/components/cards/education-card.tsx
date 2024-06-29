import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { GraduationCap } from "lucide-react";
import { Typography } from "../ui/typography";
import { ControlledCard } from "./controlled-card";
import { useCardLayout } from "../hooks/use-card-layout";

export interface EducationCardProps {}

export const EducationCard: React.FC<EducationCardProps> = () => {
  const { isOpen } = useCardLayout("education");

  return (
    <div className={cn("row-span-2 col-span-4")}>
      <ControlledCard
        card="education"
        className="flex flex-col gap-4 text-left"
        whenOpen="h-[150%] w-[120%] top-[-50%]"
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-medium">Education</CardTitle>
          <GraduationCap className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent className="flex flex-col gap-4 overflow-scroll md:mb-8">
          <EducationItem
            title="Bachelor of Computer Science"
            date="2018 - 2021"
            subtitle="Queensland University Technology"
            description="Building IT Systems, Database Management, Impact of IT, Computer Technology Fundamentals, Programming Principles, IT Systems Design, Information Security, Networks, Discrete Structures, Software Development, Cloud Computing, IT Project Management, Algorithms and Complexity, Cryptography, Systems Programming, Energy in Engineering, Sustainability and Professional Practice, Engineering Computation, Microprocessors and Digital Systems, Engineering Design, Engineering Mechanics, Electrical Engineering Foundations, Signals Analysis, Linear Algebra, Dynamics, Control and Dynamic Systems, Dynamics of Machines, Mechatronics Design"
          />
        </CardContent>
      </ControlledCard>
    </div>
  );
};

const EducationItem: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  date: string;
}> = ({ title, subtitle, description, date }) => {
  const { isOpen } = useCardLayout("education");

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
        {subtitle}
      </Typography>
      <Typography
        className={cn("pt-2", {
          "md:line-clamp-2": !isOpen,
        })}
        effect="tiny"
      >
        {description}
      </Typography>
    </div>
  );
};
