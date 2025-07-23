import { useState } from 'react'
import ExpenseTable from './component/ExpenseTable.jsx'
import ExpenseForm from './component/ExpenseForm.jsx'
import SearchBar from './component/SearchBar.jsx'
import './App.css'

function App() {
  const [expenses, setExpense] = useState([]);
  const [search, setSearch] = useState("");
  const [newExpense, setNewExpense] = useState({ name: "", amount: ""});

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (newExpense.name && newExpense.amount) {
      const newExpenseItem = {
        id: Date.now(), 
        name: newExpense.name,
        amount: parseFloat(newExpense.amount),
      };
      setExpense([...expenses, newExpenseItem]);
      setNewExpense({ name: "", amount: ""});
    }
    };

    const handleDelete = (id) => {
    setExpense(expenses.filter((expense) => expense.id !== id));
  };


    const filteredExpenses = expenses.filter((expenses) =>
      expenses.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <div className='App'>
      <ExpenseForm
        newExpense={newExpense}
        setNewExpense={setNewExpense}
        handleAddExpense={handleAddExpense}
      />

      <SearchBar search={search} setSearch={setSearch} />
      <ExpenseTable
        expenses={filteredExpenses}
        handleDelete={handleDelete}
      />

     
    </div>
  );
}

export default App
