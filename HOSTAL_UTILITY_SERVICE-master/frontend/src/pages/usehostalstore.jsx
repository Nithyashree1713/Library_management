// Example modification in `usehostalstore.js`
import { create } from 'zustand';

export const usehostalstore = create((set) => ({
    book: [],
    favoriteBooks: [],

    fetchBook: async () => {
        // Fetch books logic
    },

    orderBook: async (bookId) => {
        // Order book logic
    },

    addFavorite: (book) => set((state) => {
        const isAlreadyFavorite = state.favoriteBooks.some(favBook => favBook._id === book._id);
        if (!isAlreadyFavorite) {
            return { favoriteBooks: [...state.favoriteBooks, book] };
        }
        return state; // No change if book is already a favorite
    }),
    

    getFavorites: () => set((state) => state.favoriteBooks),
}));
