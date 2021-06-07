import { configureStore } from "@reduxjs/toolkit";
import { transactionsSlice } from "../features/transactions/transactionsSlice";
import { budgetsSlice } from "../features/budgets/budgetsSlice";

export const store = configureStore({
    reducer: {
        transactions: transactionsSlice.reducer,
        budgets: budgetsSlice.reducer,
    }
})