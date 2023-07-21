import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface User {
    id: number,
    phone: number,
    name: string,
    email: string,
    token: string,
    adress: string,
    setId: (id: number) => void,
    setPhone: (phone: string) => void,
    setName: (name: string) => void,
    setEmail: (email: string) => void,
    setToken: (token: string) => void,
    setAdress: (adress: string) => void,
    reset: () => void,
}

export const userStore = create<User>(
  persist(
    (set, get) => ({
        id: null,
        name: null,
        email: null,
        token: null,
        setId: (id: number) => set((state) => ({id})),
        setPhone: (phone: number) => set((state) => ({phone})),
        setName: (name: string) => set((state) => ({name})),
        setEmail: (email: string) => set((state) => ({email})),
        setToken: (token: string) => set((state) => ({token})),
        setAdress: (adress: string) => set((state) => ({adress})),
    }),
    {
      name: 'auth-storage', // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
)
