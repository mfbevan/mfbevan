import { cn } from "@/lib/utils";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { ControlledCard } from "./controlled-card";
import { BriefcaseBusiness } from "lucide-react";

export interface EmploymentCardProps {}

export const EmploymentCard: React.FC<EmploymentCardProps> = () => {
  return (
    <div className={cn("col-span-2 row-span-6")}>
      <ControlledCard
        card="employment"
        className="flex flex-col gap-4 text-left"
        whenOpen="h-full w-[200%] left-[-100%]"
      >
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="font-medium">Employment</CardTitle>
          <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent></CardContent>
      </ControlledCard>
    </div>
  );
};
