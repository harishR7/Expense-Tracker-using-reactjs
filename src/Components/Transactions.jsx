import { Box, Typography, Divider, makeStyles, List } from "@material-ui/core";
import Transaction from "./Transaction";

const useStyele = makeStyles(
    {
        components: {
            '& > *': {
                marginBottom: 10
            }
        }
    }
)

const Transactions = ({ transactions, deleteTransaction }) => {
    const classes = useStyele();
    return (
        <Box className={classes.components}>
            <Typography>Transaction History</Typography>
            <Divider />
            <List>
                {
                    transactions.map(transaction => {
                        return <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
                    })
                }
            </List>
        </Box>
    )
}

export default Transactions