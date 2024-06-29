"use client";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { DeveloperIconProps } from "developer-icons/dist/icon";
import { FunctionComponentElement, SVGProps } from "react";

export interface IconProps {
  children: React.ReactNode;
  label?: string;
}

export const Icon: React.FC<IconProps> = ({ children, label }) => {
  return (
    <Tooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={10}>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export const IconList: React.FC<{
  size?: number;
  icons: {
    name: string;
    icon: (
      props: DeveloperIconProps
    ) => FunctionComponentElement<
      Partial<SVGProps<SVGElement>> & { size?: number }
    >;
  }[];
}> = ({ icons, size }) => {
  return (
    <>
      {icons.map(({ name, icon }) => (
        <Icon key={name} label={name}>
          {icon({ className: "w-full", size })}
        </Icon>
      ))}
    </>
  );
};
