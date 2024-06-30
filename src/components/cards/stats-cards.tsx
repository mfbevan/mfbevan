"use client";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

import { Boxes, FileCode2, Gamepad2 } from "lucide-react";

export interface StatsCardsProps {}

export const StatsCards: React.FC<StatsCardsProps> = () => {
  return (
    <div className="col-span-3 lg:col-span-2 row-span-2 h-full w-full">
      <Swiper
        className="h-full w-full cursor-none"
        effect={"cube"}
        grabCursor={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={32}
        allowTouchMove={false}
        pagination
        noSwiping={true}
        loop
        speed={1000}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className="cursor-default p-[1px]">
          <StatsCard
            title="Full Stack Developer"
            value="4+ years"
            description="Building full stack React, TypeScript, Next.js, Node.js applications"
            icon={<FileCode2 className="h-4 w-4 text-muted-foreground" />}
          />
        </SwiperSlide>

        <SwiperSlide className="cursor-default p-[1px]">
          <StatsCard
            title="Blockchain Developer"
            value="2+ years"
            description="Building Solidity and Rust smart contracts on Ethereum and Substrate blockchains"
            icon={<Boxes className="h-4 w-4 text-muted-foreground" />}
          />
        </SwiperSlide>

        <SwiperSlide className="cursor-default p-[1px]">
          <StatsCard
            title="Programming"
            value="15+ years"
            description="Building software applications and games in various programming languages"
            icon={<Gamepad2 className="h-4 w-4 text-muted-foreground" />}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon?: React.ReactNode;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  description,
  icon,
}) => {
  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-muted-foreground">{description} </p>
      </CardContent>
    </Card>
  );
};
