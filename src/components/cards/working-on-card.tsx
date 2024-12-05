import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { BriefcaseBusiness, X } from "lucide-react";
import Image from "next/image";
import { Typography } from "../ui/typography";

export interface WorkingOnCardProps {
  delay?: number;
}

export const WorkingOnCard: React.FC<WorkingOnCardProps> = ({ delay = 0 }) => {
  const onClick = () => {
    window.open("https://lz-bridge.vercel.app", "_blank");
  };

  return (
    <Card
      className={cn("col-span-2 row-span-2 group cursor-pointer")}
      onClick={onClick}
      transition={{ delay }}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-medium">Working On</CardTitle>
        <BriefcaseBusiness className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="relative flex flex-col overflow-none h-full items-center justify-center -mt-4">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="/projects/lzbridge.jpeg"
            alt="LayerZero Bridge"
            width={60}
            height={60}
            className="rounded-2xl aspect-square object-cover"
          />
          <X />
          <Image
            src="/projects/lz.jpg"
            alt="LayerZero Bridge"
            width={60}
            height={60}
            className="rounded-2xl aspect-square object-cover"
          />
        </div>

        <Typography variant="h3" className="text-lg line-clamp-1">
          LayerZero Bridge UI
        </Typography>
        <Typography
          variant="p"
          className="text-xs text-muted-foreground line-clamp-3 text-center"
        >
          Open-source LayerZero OFT bridging interface.
        </Typography>
      </CardContent>
    </Card>
  );
};
