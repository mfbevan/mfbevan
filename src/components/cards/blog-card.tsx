import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { Typography } from "../ui/typography";

export interface BlogCardProps {}

export const BlogCard: React.FC<BlogCardProps> = () => {
  return (
    <Card
      className={cn(
        "p-8 flex flex-col gap-4 text-center col-span-2 row-span-4"
      )}
    >
      <Typography variant="h2">Blog</Typography>
    </Card>
  );
};
