import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle } from "../ui/card";
import { Library } from "lucide-react";

export interface BlogCardProps {}

export const BlogCard: React.FC<BlogCardProps> = () => {
  return (
    <Card className={cn("col-span-2 row-span-4")}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="font-medium">Blog</CardTitle>
        <Library className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
    </Card>
  );
};
