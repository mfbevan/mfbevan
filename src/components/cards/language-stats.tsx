import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

import { Code } from "lucide-react";

export interface LanguageStatsCardProps {}

export const LanguageStatsCard: React.FC<LanguageStatsCardProps> = () => {
  return (
    <div className="col-span-2 lg:col-span-2 row-span-2 h-full w-full">
      <Card className="h-full w-full">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Top Languages</CardTitle>
          <Code className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="p-0">
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=mfbevan&hide_border=true&hide_title=true&layout=compact"
            alt="Top Languages"
            className="h-full w-full object-cover"
          />
        </CardContent>
      </Card>
    </div>
  );
};
