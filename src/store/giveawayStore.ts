import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface IGiveawayState {
  id: number;
  car: string;
  description: string;
  giveaway_date: string;
  creation_date: string;
  status: number;
  winner_id: number;
  tickets: number;
	ticket_price: number;
}

interface IGiveaway {
  giveaway: IGiveawayState;
  setGiveaway: (object: IGiveaway) => void;
  reset: () => void;
}

const initialState : IGiveawayState = {
    id: null,
    car: null,
    description: null,
    giveaway_date: null,
    creation_date: null,
    status: null,
    winner_id: null,
    tickets: null,
    ticket_price: null,
}

export const giveawayStore = create<IGiveaway>(
  (set) => ({
    giveaway : {...initialState},
    setGiveaway: (data) => set((state) => ({ giveaway: {...data} })),
    reset: () =>
      set((state) => ({
        initialState
      })),
  })
);
