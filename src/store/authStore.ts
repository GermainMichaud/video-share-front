import createStore from 'zustand';

import { IUser } from '../interfaces';
import { getUserMe } from '../utils/api';

export const useAuthStore = createStore<{
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  getUser: () => Promise<void>;
}>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  getUser: async () => {
    const result = await getUserMe();
    set({ user: result });
  },
}));
