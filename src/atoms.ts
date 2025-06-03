import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

export enum SortOrder {
  Ascending, // 昇順
  Descending, // 降順
}

const storage = createJSONStorage(() => localStorage);

export const sortOrderAtom = atomWithStorage(
  "sortOrder",
  SortOrder.Descending,
  storage
);
