/** @format */

import { create } from "zustand";

interface State {
    fileLayout: "grid" | "list";
    toggleFileLayout: () => void;
}

export const useStore = create<State>()((set) => ({
    fileLayout: "grid",
    toggleFileLayout: () =>
        set((state) => {
            return {
                fileLayout: state.fileLayout === "grid" ? "list" : "grid",
            };
        }),
}));
