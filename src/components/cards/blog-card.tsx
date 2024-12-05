import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Library } from "lucide-react";

export interface BlogCardProps {
  delay?: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({ delay = 0 }) => {
  return (
    <Card className={cn("col-span-2 row-span-2")} transition={{ delay }}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-medium">Development Blog</CardTitle>
        <Library className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
    </Card>
  );
};
