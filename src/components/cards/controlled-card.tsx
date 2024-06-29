import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { useCardLayout } from "../hooks/use-card-layout";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface ControlledCardProps {
  card: string;
  children: React.ReactNode;
  whenOpen?: string;
  whenClosed?: string;
  className?: string;
}

export const ControlledCard: React.FC<ControlledCardProps> = ({
  card,
  children,
  whenOpen,
  whenClosed,
  className,
}) => {
  const { isOpen, onClose, onToggle } = useCardLayout(card);

  return (
    <>
      <div
        className={cn("transition-all ease-in-out duration-300 z-10", {
          "fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm": isOpen,
          "backdrop-blur-0 bg-opacity-0": !isOpen,
        })}
        onClick={onClose}
      />

      <Tooltip disableHoverableContent>
        <TooltipTrigger className="w-full h-full">
          <Card
            className={cn(
              "relative ease transition-all ease-in-out duration-300 cursor-pointer",
              className,
              {
                [cn("h-full hover:m-1", whenClosed)]: !isOpen,
                [cn("z-20", whenOpen)]: isOpen,
              }
            )}
            onClick={onToggle}
          >
            {children}
          </Card>
        </TooltipTrigger>

        {!isOpen && (
          <TooltipContent>
            <p>Click to see more</p>
          </TooltipContent>
        )}
      </Tooltip>
    </>
  );
};
