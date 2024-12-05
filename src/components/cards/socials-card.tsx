import { Typography } from "../ui/typography";
import { Button } from "../ui/button";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { motion } from "framer-motion";

export interface SocialsCardProps {
  delay?: number;
}

export const SocialsCard: React.FC<SocialsCardProps> = ({ delay = 0 }) => {
  return (
    <div className="col-span-1 lg:col-span-2 row-span-2 flex md:flex-col gap-4 z-[2]">
      <motion.div
        className="h-full w-full"
        initial={{ opacity: 0, y: 10, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay }}
      >
        <Link
          href="https://github.com/mfbevan"
          target="_blank"
          className="w-full h-full"
        >
          <Button
            className="flex gap-2 shadow rounded-2xl w-full h-full hover:m-1 transition-all ease-in-out duration-300"
            variant="outline"
          >
            <GitHubLogoIcon className="size-6" />
            <Typography className="block md:hidden lg:block">GitHub</Typography>
          </Button>
        </Link>
      </motion.div>

      <motion.div
        className="h-full w-full"
        initial={{ opacity: 0, y: 10, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: delay + 0.2 }}
      >
        <Link
          href="https://www.linkedin.com/in/mfbevan/"
          target="_blank"
          className="w-full h-full"
        >
          <Button
            className="flex gap-2 w-full h-full shadow rounded-2xl hover:m-1 transition-all ease-in-out duration-300"
            variant="outline"
          >
            <LinkedInLogoIcon className="size-6" />
            <Typography className="block md:hidden lg:block">
              LinkedIn
            </Typography>
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};
