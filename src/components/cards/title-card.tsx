import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Typography } from "../ui/typography";
import { useLayoutStore } from "../hooks/use-layout-store";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";

export interface TitleCardProps {}

export const TitleCard: React.FC<TitleCardProps> = () => {
  const { selected } = useLayoutStore();

  return (
    <Card
      className={cn(
        "p-8 flex flex-col gap-4 text-center col-span-6 row-span-4"
      )}
    >
      <div className="flex flex-col items-center gap-4 md:flex-row justify-evenly">
        <Image
          src="/profile.jpeg"
          alt="profile"
          width={150}
          height={150}
          style={{
            borderRadius: "50%",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
        <div className="flex flex-col justify-center">
          <Typography variant="h1" className="lg:text-6xl">
            Matthew Bevan
          </Typography>
          <Typography variant="h3">Senior Software Engineer</Typography>
        </div>
        <div className="flex flex-2" />
      </div>

      <Separator />

      <div className="flex flex-wrap gap-4 items-center justify-center">
        <Badge>Full Stack Developer</Badge>
        <Badge variant="outline">Smart Contract Engineer</Badge>
        <Badge variant="secondary">Web 3.0 Enthusiast</Badge>
      </div>

      <Typography effect="tiny">
        With a solid foundation in both Web 2.0 and Web 3.0 technologies, I
        bring expertise in Ethereum smart contract development and full-stack
        application development. Passionate about building innovative and
        performant platforms, I have contributed to several enterprise-level
        platforms, open-source initiatives, and a variety of personal projects.
      </Typography>
    </Card>
  );
};
