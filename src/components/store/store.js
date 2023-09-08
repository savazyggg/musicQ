import { create } from "zustand";
import { useLogin } from "../api/onLogin";

import { onSearchDetail } from "../api/onSearchDetail";

// export const useLoginStore = create((set) => ({
//   token: "",
//   fetch: async () => {
//     const response = await useLogin(); // useLogin 함수 호출
//     set({ token: response.token });
//   },
// }));

// export const useApiStore = create((set) => ({
//   api: "",
//   fetch: async (api) => {
//     const response = await onSearchDetail(access_token, api)
//     set({ api: await response.tracks.href })
//   },
// }));

export const useSongStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
