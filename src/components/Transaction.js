import React from "react";
import { useDispatch } from "react-redux";
import { deleteTransaction } from "../features/transactions/transactionsSlice";

export const Transaction = ({ transaction }) => {
  const dispatch = useDispatch();
  // Handle clicking delete transaction button
  const handleDelete = (e) => {
    dispatch(deleteTransaction(transaction));
  };
  return (
    <li className="new-transaction">
      <span>
        {transaction.amount} - {transaction.category}{" | "}
        <span className="description">{transaction.description}</span>
      </span>
      <button aria-label="Remove" onClick={handleDelete}>
        X
      </button>
    </li>
  );
};
