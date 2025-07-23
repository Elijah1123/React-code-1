import react from 'react';

const ExpenseTable = ({ expenses, handleDelete}) => {
    return (
        <table className='w-full table-auto border'>
            <thead>
                <tr className='bg-gray-100'>
                    <th className='p-2 border'>Name</th>
                    <th className='p-2 border'>Amount</th>
                    <th className='p-2 border'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expenses) => (
                   <tr key={expenses.id} className='text-center'>
                        <td className='p-2 border'>{expenses.name}</td>
                        <td className='p-2 border'>{expenses.amount.toFixed(2)}</td>
                        <td className='p-2 border'>
                            <button 
                                onClick={() => handleDelete(expenses.id)}
                                className='bg-red-500 text-white px-3 py-1 rounded'
                                >
                                    Delete
                                
                            </button>
                        </td>

                   </tr> 
                
            ))}
            </tbody>

        </table>
    );

};

export default ExpenseTable;