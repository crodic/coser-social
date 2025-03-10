import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type State = {
  openCreatePost: boolean;
  openSearchVisible: boolean;
};

type Action = {
  onOpenCreatePostChange: (open: boolean) => void;
  onOpenSearchVisibleChange: (open: boolean) => void;
};

type Store = State & Action;

const initialState = {
  openCreatePost: false,
  openSearchVisible: false,
};

const useRootState = create<Store, [["zustand/immer", never]]>(
  immer((set) => ({
    ...initialState,
    onOpenCreatePostChange: (open) => set({ openCreatePost: open }),
    onOpenSearchVisibleChange: (open) => set({ openSearchVisible: open }),
  })),
);

export default useRootState;
