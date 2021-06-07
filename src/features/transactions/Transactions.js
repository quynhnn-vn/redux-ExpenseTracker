import React from "react";
import { useSelector } from "react-redux";
import { selectFlattenedTransactions } from "./transactionsSlice";
import { TransactionList } from "../../components/TransactionList";
import { TransactionForm } from "../../components/TransactionForm";

export const Transactions = () => {
    const transactions = useSelector(selectFlattenedTransactions);

    return (
        <div className="comments-container">
            <TransactionList transactions={transactions} />
            <TransactionForm />
        </div>
    );
};