import { create } from "zustand";

interface Data {
  page: string;
  onchange: (newPage: string) => void;
}

const useSearch = create<Data>((set) => ({
  page: "",
  onchange: (newPage) => set({ page: newPage }),
}));
export default useSearch;
