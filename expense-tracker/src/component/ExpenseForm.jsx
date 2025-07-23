import React from "react";

const ExpenseForm = ({ newExpense, setNewExpense, handleAddExpense}) => {
    return (
        <form onSubmit={handleAddExpense} className="mb-4 flex gap-2">
            <input
            type="text"
                placeholder="Expense name"
                value={newExpense.name}
                onChange={(e)  => setNewExpense({ ...newExpense, name: e.target.value})}
                className="border p-2 flex-1 rounded"
            />
            <input
                type="number"
                placeholder="Amount"
                value={newExpense.amount}
                onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value})}
                className="border p-2 w-28 rounded"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                 Add
            </button>
                
            

        </form>
    );
};

export default ExpenseForm;