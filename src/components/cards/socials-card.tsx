import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export interface SocialsCardProps {}

export const SocialsCard: React.FC<SocialsCardProps> = () => {
  return (
    <div className="col-span-1 lg:col-span-2 row-span-2 flex md:flex-col gap-4">
      <Link
        href="https://github.com/mfbevan"
        target="_blank"
        className="w-full h-full"
      >
        <Button
          className="flex gap-2 shadow rounded-lg w-full h-full hover:m-1 transition-all ease-in-out duration-300"
          variant="outline"
        >
          <GitHubLogoIcon className="size-6" />
          <Typography className="block md:hidden lg:block">GitHub</Typography>
        </Button>
      </Link>

      <Link
        href="https://www.linkedin.com/in/mfbevan/"
        target="_blank"
        className="w-full h-full"
      >
        <Button
          className="flex gap-2 w-full h-full shadow rounded-lg hover:m-1 transition-all ease-in-out duration-300"
          variant="outline"
        >
          <LinkedInLogoIcon className="size-6" />
          <Typography className="block md:hidden lg:block">LinkedIn</Typography>
        </Button>
      </Link>
    </div>
  );
};
