import { create } from "zustand";

interface User {
    name: string,
    email: string,
    token: string,
    setName: () => void,
    setEmail: () => void,
    setToken: () => void,
}

export const userStore = create<User>()((set) => ({
    name: 'prueba',
    email: '',
    token: 'prueba',
    setName: (name: string) => set((state) => ({name})),
    setEmail: (email: string) => set((state) => ({email})),
    setToken: (token: string) => set((state) => ({token})),
}))