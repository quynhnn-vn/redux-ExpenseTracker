import { createSlice } from "@reduxjs/toolkit";

// Create initialState and slice
export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
// InitialState has form: [ {category: "housing", amount: 0}, {category: "food", amount: 0} ]
const initialState = CATEGORIES.map(category => ({category: category, amount: 0}));

export const budgetsSlice = createSlice({
    name: "budgets",
    initialState: initialState,
    reducers: {
        editBudget: (state, action) => {
            const newBudgets = state.map(budget => {
                if (budget.category === action.payload.category) {
                   return action.payload;
                }
                return budget;
            })
            return newBudgets;
        }
    }
});

// Export actions and reducer
export const { editBudget } = budgetsSlice.actions;
export default budgetsSlice.reducer;

// Create selectors
export const selectBudgets = (state) => state.budgets;
