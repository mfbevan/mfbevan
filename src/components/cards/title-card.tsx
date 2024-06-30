import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Typography } from "../ui/typography";
import { useLayoutStore } from "../hooks/use-layout-store";
import Image from "next/image";
import { Badge } from "../ui/badge";

export interface TitleCardProps {}

export const TitleCard: React.FC<TitleCardProps> = () => {
  const { selected } = useLayoutStore();

  return (
    <Card
      className={cn(
        "p-8 flex flex-col gap-4 text-center col-span-6 row-span-4"
      )}
    >
      <div className="flex flex-col items-center gap-4 md:flex-row">
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
          <Typography variant="h1" className="text-6xl">
            Matthew Bevan
          </Typography>
          <Typography variant="h3">Software Engineer</Typography>
        </div>
      </div>

      <Typography effect="tiny">
        I am a software engineer with a passion for programming and problem
        solving. After completing a Bachelor of Computer Science, I jumped at
        the chance to kickstart my professional career as a Full Stack Developer
        working on enterprise email suppression list management software, and
        quickly found a home building in the Web 2.0 space. Frustrated with the
        inherent centralisation and lack of individual ownership across an
        internet owned by the Big Five, the concept of blockchain technology
        piqued my interest in 2021. Blockchain and the crypto space opens a
        world of opportunity for decentralisation, self-sovereign ownership and
        scaling like never before that I am passionate to be a part of since
        joining Labrys in 2022. At Labrys I work as a Senior Software Developer,
        tackling problems in both the Web 2.0 and Web 3.0 world, building web
        applications and smart contracts alongside some of the best developers
        in the crypto space today.
      </Typography>
    </Card>
  );
};
