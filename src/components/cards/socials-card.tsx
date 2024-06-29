import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export interface SocialsCardProps {}

export const SocialsCard: React.FC<SocialsCardProps> = () => {
  return (
    <div className="col-span-2 row-span-2 flex flex-col gap-4">
      <Link
        href="https://github.com/mfbevan"
        target="_blank"
        className="w-full h-full"
      >
        <Button
          className="flex gap-2 shadow rounded-lg w-full h-full"
          variant="outline"
        >
          <GitHubLogoIcon className="size-6" />
          <Typography>GitHub</Typography>
        </Button>
      </Link>

      <Link
        href="https://www.linkedin.com/in/mfbevan/"
        target="_blank"
        className="w-full h-full"
      >
        <Button
          className="flex gap-2 w-full h-full shadow rounded-lg"
          variant="outline"
        >
          <LinkedInLogoIcon className="size-6" />
          <Typography>LinkedIn</Typography>
        </Button>
      </Link>
      {/* <Card className="flex flex-col items-center justify-center h-full">
        <Typography variant="h2">Placeholder</Typography>
      </Card>
      <Card className="flex flex-col items-center justify-center h-full">
        <Typography variant="h2">Placeholder</Typography>
      </Card> */}
    </div>
  );
};
