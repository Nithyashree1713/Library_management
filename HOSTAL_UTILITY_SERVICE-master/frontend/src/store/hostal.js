import { create } from "zustand";

export const usehostalstore = create((set) => ({
    accounts: [],
    book: [],
    form:[],
    favoriteBooks: [],  // State to store favorite books
    currentUser: null, // To store the currently signed-in user

    setAccount: (accounts) => set({ accounts }),
    setComp: (book) => set({ book }),
    setform:(form)=>set({form}),
    // Sign-up function
    createAccount: async (newAccount) => {
        if (!newAccount.name || !newAccount.email || !newAccount.password) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAccount),
        });
        const data = await res.json();
        if (data.success) {
            set((state) => ({ accounts: [...state.accounts, data.data] }));
        }
        return { success: data.success, message: data.message };
    },

    // Sign-in function
    signInAccount: async (account) => {
        if (!account.email || !account.password) {
            return { success: false, message: "Please provide email and password." };
        }
        const res = await fetch("/api/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(account),
        });
        const data = await res.json();

        if (data.success) {
            set({ currentUser: data.data });
        }
        return { success: data.success, message: data.message };
    },

    createAccountadmin: async (newAccount) => {
        if (!newAccount.name || !newAccount.email || !newAccount.password) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/signupadmin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAccount),
        });
        const data = await res.json();
        if (data.success) {
            set((state) => ({ accounts: [...state.accounts, data.data] }));
        }
        return { success: data.success, message: data.message };
    },

    signInAccountadmin: async (account) => {
        if (!account.email || !account.password) {
            return { success: false, message: "Please provide email and password." };
        }
        const res = await fetch("/api/signinadmin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(account),
        });
        const data = await res.json();

        if (data.success) {
            set({ currentUser: data.data });
        }
        return { success: data.success, message: data.message };
    },

    createBook: async (newBook) => {
        if (!newBook.name || !newBook.author || !newBook.category|| !newBook.publishedDate || !newBook.image) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newBook),
        });
        const data = await res.json();
        if (data.success) {
            set((state) => ({ book: [...state.book, data.data] }));
        }
        return { success: data.success, message: data.message };
    },
    fetchBook: async () => {
        const res = await fetch("/api/getbook", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data.success) {
            set({ book: data.data }); // Store complaints in comp state
        }
    },
    deletebook: async (pid) => {
        const res = await fetch(`/api/delete/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if (!data.success) return { success: false, message: data.message };
    
        // Filter out the deleted book from the state
        set((state) => ({ book: state.book.filter(book => book._id !== pid) }));
    
        return { success: true, message: data.message };
    },
    orderBook: async (bookId) => {
        if (!bookId) return { success: false, message: "Invalid book ID" };

        const res = await fetch(`/api/insert/${bookId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`, // Assuming token-based auth
            },
        });
        const data = await res.json();

        if (data.success) {
            return { success: true, message: "Book successfully ordered!" };
        } else {
            return { success: false, message: data.message };
        }
    },
     fetch: async () => {
        const res = await fetch("/api/getord", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data.success) {
            set({ book: data.data }); // Store complaints in comp state
        }
    },
    createform: async (Form) => {
        if (!Form.name || !Form.email || !Form.pno||!Form.date||!Form.book) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Form),
        });
        const data = await res.json();
        if (data.success) {
            set((state) => ({ form: [...state.form, data.data] }));
        }
        return { success: data.success, message: data.message };
    },
    fetchform: async () => {
        const res = await fetch("/api/form_details", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data.success) {
            set({ form: data.data }); // Store complaints in comp state
        }
    },
    // addFavorite: (book) => set((state) => {
    //     const isAlreadyFavorite = state.favoriteBooks.some(favBook => favBook._id === book._id);
    //     if (!isAlreadyFavorite) {
    //         return { favoriteBooks: [...state.favoriteBooks, book] };
    //     }
    //     return state;
    // }),
    
/*addFavorite: async (favoriteBooks) => {
        if (!favoriteBooks.name || !favoriteBooks.email || !favoriteBooks.pno||!favoriteBooks.date||!favoriteBooks.book) {
            return { success: false, message: "Please fill in all fields." };
        }
        const res = await fetch("/api/fav", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Form),
        });
        const data = await res.json();
        if (data.success) {
            set((state) => ({ favoriteBooks: [...state.favoriteBooks, data.data] }));
        }
        return { success: data.success, message: data.message };
    },*/
  
    
       
    
      

    // fetchBook: async () => {
    //     const res = await fetch("/api/getbook", {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     const data = await res.json();
    //     if (data.success) {
    //         set({ book: data.data });
    //     }
    // },
}));
