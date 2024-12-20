import { create } from 'zustand';

interface SearchState {
  eventType: string;
  date: string;
  location: string;
  priceRange: [number, number];
  filters: {
    amenities: string[];
    capacity: number;
    rating: number;
  };
  setSearchParams: (params: Partial<Omit<SearchState, 'setSearchParams' | 'clearSearch'>>) => void;
  clearSearch: () => void;
}

const initialState = {
  eventType: '',
  date: '',
  location: '',
  priceRange: [0, 100000],
  filters: {
    amenities: [],
    capacity: 0,
    rating: 0,
  },
};

export const useSearchStore = create<SearchState>((set) => ({
  ...initialState,
  setSearchParams: (params) => set((state) => ({ ...state, ...params })),
  clearSearch: () => set(initialState),
}));