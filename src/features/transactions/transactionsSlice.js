import { createSlice } from "@reduxjs/toolkit";

// Create initialState and slice
export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
// State has form: { housing: [], food: [], ... }
const initialState = Object.fromEntries(
  CATEGORIES.map((category) => [category, []])
);

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      // Make a copy of state[category] and add new transaction for that category
      const newTransactionsForCategory = [
        ...state[action.payload.category].slice(),
        action.payload,
      ];
      // Make a copy of state and add new transaction with category to state
      return {
        ...state,
        [action.payload.category]: newTransactionsForCategory,
      }
    },
    deleteTransaction: (state, action) => {
      // Search index of transaction to delete
      const deletedIndex = state[action.payload.category].findIndex(
        (transaction) => transaction.id === action.payload.id
      );
      // Delete that transaction within its category
      const newTransactionsForCategory = state[action.payload.category].filter(
        (item, index) => index !== deletedIndex
      );
      return {
        ...state,
        [action.payload.category]: newTransactionsForCategory,
      };
    }
  }
})

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;

// Create selectors
export const selectTransactions = (state) => state.transactions;
/* Convert transactions data from:
    {
        housing: [ {category: "housing", description: "rent", amound: 400, id: 123} ],
        food: [ {category: "food", description: "groceries", amount: 50, id: 456} ],
    }
    into:
    [
        {category: "housing", description: "rent", amound: 400, id: 123},
        {category: "food", description: "groceries", amount: 50, id: 456}
    ]
*/
export const selectFlattenedTransactions = (state) =>
  Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);
