import { create } from "zustand";

interface User {
    id: number,
    name: string,
    email: string,
    token: string,
    setId: () => void,
    setName: () => void,
    setEmail: () => void,
    setToken: () => void,
}

export const userStore = create<User>()((set) => ({
    id: null,
    name: '',
    email: '',
    token: '',
    setId: (id: number) => set((state) => ({id})),
    setName: (name: string) => set((state) => ({name})),
    setEmail: (email: string) => set((state) => ({email})),
    setToken: (token: string) => set((state) => ({token})),
}))