/** @format */

import { usePathname } from "next/navigation";

export function useIsTrash() {
    return usePathname().split("/")[2] === "trash";
}
