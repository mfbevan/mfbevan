import { cn } from "@/lib/utils";
import { CardContent, CardHeader, CardTitle } from "../ui/card";
import { ControlledCard } from "./controlled-card";
import { FolderKanban } from "lucide-react";
import { useCardLayout } from "../hooks/use-card-layout";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

export interface ProjectsCardProps {}

export const ProjectsCard: React.FC<ProjectsCardProps> = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { isOpen } = useCardLayout("projects");

  return (
    <div className={cn("col-span-6 row-span-2")}>
      <ControlledCard
        card="projects"
        className="flex flex-col gap-2 text-left"
        whenOpen="h-[300%]"
      >
        <CardHeader className="flex flex-row items-center justify-between pb-0">
          <CardTitle className="font-medium">Projects</CardTitle>
          <FolderKanban className="h-4 w-4 text-muted-foreground" />
        </CardHeader>

        <CardContent
          className={cn(
            "flex gap-4 transition-all duration-300 h-full overflow-y-scroll overflow-x-scroll mr-6",
            {
              "flex-col mr-0": isMobile || isOpen,
            }
          )}
        >
          <ProjectCard
            title="ethdash.xyz"
            description="All of your favourite Ethereum Dashboards in one place. Thanks to Superphiz for getting this idea started! Check out the site at www.ethdash.xyz"
            image="/projects/ethdash.png"
            url="https://www.ethdash.xyz/"
          />
          <ProjectCard
            title="ethjump.xyz"
            description="ethjump.xyz is a simple, fast and secure way to jump between Ethereum and L2s (including testnets). Check it out at ethjump.xyz"
            image="/projects/ethjump.png"
            url="https://ethjump.xyz"
          />
          <ProjectCard
            title="LayerZero Bridge"
            description="A generic LayerZero OFT bridging interface that simplifies bridging operations across LayerZero-enabled chains"
            image="/projects/lzbridge.jpeg"
            url="https://lz-bridge.vercel.app"
          />
          <ProjectCard
            title="This Portfolio"
            description="This portfolio is built with Next.js, React, Tailwind & shadcn/ui. The site is stored in a Github Repo and served up through Vercel on a custom domain. "
            image="/projects/portfolio.png"
            url="https://github.com/mfbevan/mfbevan"
          />
          <ProjectCard
            title="Bolt"
            description="An interpreter for Bolt (or boltlang) programming language, written in Go. Based on Monkey, the programing language that lives in books, featured in Writing an Interpreter in Go, by Thorsten Ball"
            image="/projects/bolt.svg"
            url="https://github.com/mfbevan/bolt"
          />
          <ProjectCard
            title="Scuderia"
            description="Scuderia is a fully on-chain racing NFT ecosystem that allows minting, metadata and image generation, all running on Polygon. Check it out at scuderia.mfbevan.com"
            image="/projects/scuderia.svg"
            url="https://scuderia.mfbevan.com"
          />
          <ProjectCard
            title="Nexeth Explorer"
            description="Nexeth unifies your search across Ethereum and L2s (including testnets). Explore networks, tokens, NFTs, and transactions – all from a single powerful interface."
            image="/projects/nexeth.png"
            url="https://explorer.nexeth.xyz"
          />
          <ProjectCard
            title="Visual Smart Contract Development"
            description="A visual tool for developing smart contracts on Ethereum. Built with Next.js, React, Tailwind & shadcn/ui"
            image="/projects/nexethvisual.png"
            url="https://nexeth-client.vercel.app"
          />
          <ProjectCard
            title="IPFS Drive"
            description="A decentralized file storage platform built on IPFS and Ethereum. Create decentralised data drives and store content in them as NFTs. No database, no APIs."
            image="/projects/drive.jpeg"
            url="https://drive.nexeth.xyz"
          />
          <ProjectCard
            title="Hugging Face UI"
            description="A simple UI for the Hugging Face API. Built with Next.js, React, Chakra UI"
            image="/projects/huggingface.svg"
            url="https://hugging-face-ui.mfbevan.com/"
          />
        </CardContent>
      </ControlledCard>
    </div>
  );
};

const ProjectCard: React.FC<{
  title: string;
  description: string;
  image: string;
  url: string;
}> = ({ title, description, image, url }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { isOpen } = useCardLayout("projects");

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    window.open(url, "_blank");
  };

  if (isMobile || isOpen) {
    return (
      <div
        className="flex gap-4 hover:shadow rounded-lg group items-center"
        onClick={handleClick}
      >
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="rounded-lg aspect-square object-cover shadow size-[80px] group-hover:scale-[0.8] group-hover:shadow-none transition-all duration-100"
        />
        <div className="flex flex-col select-none p-2">
          <h3 className="font-medium">{title}</h3>
          <p className="text-xs text-muted-foreground">{description}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 aspect-square shadow rounded-2xl size-[110px]">
      <Image
        src={image}
        alt={title}
        width={110}
        height={110}
        className="rounded-2xl aspect-square object-cover"
      />
    </div>
  );
};
