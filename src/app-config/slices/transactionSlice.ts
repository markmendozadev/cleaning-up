import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ItransactionState {
  transactions: Record<string, unknown>[];
  loading: boolean;
  error: unknown;
}

const initialState = {
  transactions: [],
  loading: false,
  error: null,
} satisfies ItransactionState as ItransactionState;

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    createTransaction: (
      state,
      action: PayloadAction<Record<string, unknown>>
    ) => {
      state.transactions = [...state.transactions, action.payload];
    },
  },
});

export const { createTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
