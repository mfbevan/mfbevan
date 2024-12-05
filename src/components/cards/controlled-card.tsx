import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import { useCardLayout } from "../hooks/use-card-layout";
import { Typography } from "../ui/typography";

export interface ControlledCardProps {
  card: string;
  children: React.ReactNode;
  whenOpen?: string;
  whenClosed?: string;
  className?: string;
  delay?: number;
}

export const ControlledCard: React.FC<ControlledCardProps> = ({
  card,
  children,
  whenOpen,
  whenClosed,
  className,
  delay = 0,
}) => {
  const { isOpen, onClose, onToggle } = useCardLayout(card);
  return (
    <>
      <div
        className={cn(
          "transition-all ease-in-out duration-300 z-10 fixed inset-0",
          {
            "bg-black bg-opacity-10 backdrop-blur-md": isOpen,
            "pointer-events-none backdrop-blur-0 bg-opacity-0": !isOpen,
          }
        )}
        onClick={onClose}
      />

      <Card
        className={cn(
          "relative cursor-pointer",
          isOpen
            ? cn("z-20", whenOpen)
            : cn(
                "h-full w-full inset-0 md:hover:m-1 md:hover:shadow-lg md:hover:bg-accent",
                whenClosed
              ),
          className
        )}
        onClick={onToggle}
        transition={{ delay }}
      >
        {children}

        <Typography
          effect="tiny"
          className={cn(
            "text-center absolute bottom-2 w-full transition-all ease hidden md:block",
            { "opacity-0": isOpen }
          )}
        >
          Click to see more
        </Typography>
      </Card>
    </>
  );
};
