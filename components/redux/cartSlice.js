import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    orders: [],
  },
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity += 1;
      }
    },
    decreaseItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex !== -1 && state.items[itemIndex].quantity > 1) {
        state.items[itemIndex].quantity -= 1;
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    checkout: (state) => {
      const currentDate = new Date().toLocaleDateString();
      const ordersWithDate = state.items.map((item) => ({
        ...item,
        date: currentDate,
      }));
      state.orders = [...state.orders, ...ordersWithDate];
      state.items = [];
    },
  },
});

export const {
  addItem,
  increaseItem,
  decreaseItem,
  removeItem,
  clearCart,
  checkout,
  addRating,
} = cartSlice.actions;

export default cartSlice.reducer;
