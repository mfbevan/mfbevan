import { create } from "zustand";

export interface LayoutStoreProps {
  selected?: string;
  setSelected: (selected?: string) => void;
}

export const useLayoutStore = create<LayoutStoreProps>((set) => ({
  selected: undefined,
  setSelected: (selected) => set({ selected }),
}));
