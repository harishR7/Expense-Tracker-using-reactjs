import { useState } from 'react';
import './App.css';
import { Typography, makeStyles, Box } from '@material-ui/core';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransactions from './Components/NewTransactions';
import Transactions from './Components/Transactions';




const useStyle = makeStyles(
  {
    header: {
      color: 'blue',
      fontSize: 35,
      margin: '10px 0',
      textTransform: 'uppercase'
    },
    component: {
      background: '#FFF',
      width: 800,
      padding: 10,
      borderRadius: 20,
      display: 'flex',
      '&>*': {
        width: '50%',
        padding: 10,
        height: '70vh'

      }

    }
  }
)





function App() {
  const classes = useStyle();

  const [transactions, setTransaction] = useState([
    { id: 1, text: "Momos", amount: -20 },
    { id: 2, text: "Salary", amount: 2000 },
    { id: 3, text: "Books", amount: -200 },
    { id: 4, text: "Bonus", amount: 200 },
  ]);

  const deleteTransaction = (id) => {
    setTransaction(transactions.filter(transaction => transaction.id !== id));
  }
  const addTransaction = (transaction) => {
    console.log(transactions);
    setTransaction(transactions => [transaction, ...transactions]);
  }
  return (
    <div className="App">
      <Typography className={classes.header}>Expense tracker</Typography>
      <Box className={classes.component}>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransactions addTransaction={addTransaction} />
        </Box>
        <Box>
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction} />
        </Box>
      </Box>
    </div>
  );
}

export default App;
