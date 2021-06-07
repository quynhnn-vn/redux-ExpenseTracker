import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTransaction,
  CATEGORIES,
} from "../features/transactions/transactionsSlice";
// Use uuid to create random ID
import { v4 as uuidv4 } from "uuid";

export const TransactionForm = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  // Handle submitting add transaction form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTransaction({
        category: category,
        description: description,
        amount: parseFloat(amount),
        id: uuidv4(),
      })
    );
    setCategory(CATEGORIES[0]);
    setDescription("");
    setAmount(0);
  };

  return (
    <section className="new-transaction-section">
      <h2>New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <div>
            <label htmlFor="category">Category</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.currentTarget.value)}
            >
              {CATEGORIES.map((category) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <input
              id="description"
              value={description}
              type="text"
              onChange={(e) => setDescription(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="amount">Amount</label>
            <input
              id="amount"
              value={amount}
              type="number"
              step="0.01"
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
          </div>
          <button>Add Transaction</button>
        </div>
      </form>
    </section>
  );
};
