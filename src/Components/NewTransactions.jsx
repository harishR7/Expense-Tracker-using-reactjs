import { Box, Typography, TextField, makeStyles, Button } from "@material-ui/core";
import { useState } from "react";

const useStyele = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        '&>*': {
            marginTop: 30
        }
    },
    button: {
        background: '#445A6F',
        color: '#FFF'

    }
})


const NewTransactions = ({ addTransaction }) => {
    const classes = useStyele();
    const [text, settext] = useState('');
    const [amount, setamount] = useState();

    const newTransactions = () => {
        const transaction = {
            id: Math.floor(Math.random() * 10000),
            text: text,
            amount: +amount,
        }
        addTransaction(transaction);
    }
    return (
        <Box className={classes.container}>
            <Typography variant="h5">New Transaction</Typography>
            <TextField label="Enter the Expense" onChange={(e) => settext(e.target.value)} />
            <TextField label="Total amount" onChange={(e) => setamount(e.target.value)} />
            <Button className={classes.button} onClick={newTransactions} variant="contained">Add Transaction</Button>
        </Box>

    )
}

export default NewTransactions;