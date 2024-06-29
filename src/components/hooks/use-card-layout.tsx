"use client";

import { useMediaQuery } from "usehooks-ts";
import { useLayoutStore } from "./use-layout-store";

export const useCardLayout = (card: string) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { selected, setSelected } = useLayoutStore();

  const onOpen = () => {
    if (isMobile) return;
    setSelected(card);
  };
  const onClose = () => {
    if (isMobile) return;
    setSelected(undefined);
  };
  const onToggle = () => {
    if (isMobile) return;
    if (selected === card) {
      onClose();
    } else {
      onOpen();
    }
  };

  return {
    isOpen: selected === card,
    onOpen,
    onClose,
    onToggle,
  };
};
