"use client";

import { useLayoutStore } from "./use-layout-store";

export const useCardLayout = (card: string) => {
  const { selected, setSelected } = useLayoutStore();

  const onOpen = () => {
    setSelected(card);
  };
  const onClose = () => {
    setSelected(undefined);
  };
  const onToggle = () => {
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
