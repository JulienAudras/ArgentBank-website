import Header from "../components/Header";
import Footer from "../components/Footer";
import Account from "../components/Account";
import Transaction from "../components/Transaction";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { fetchGetTransactions } from "../redux";
import "../style/style.css";


const TransactionsPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedAccountId = useSelector((state) => state.selectedAccount);

  const accounts = useSelector((state) => state.accounts.accounts);
  const account = accounts.find((account) => account._id === selectedAccountId);
  


  const transactions = useSelector((state) => state.transactions.transactions);
  
  function formatInDollars(amountInCents) {
    return (amountInCents / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
  
  useEffect(() => {
    const accountId = selectedAccountId; 
    dispatch(fetchGetTransactions(accountId));
  }, [dispatch, selectedAccountId]);

  useEffect(() => {
    const transactionsTimeout = setTimeout(() => {
      if (!transactions) {
        navigate('/accounts');
      }
      }, 3000);
      return () => {
        clearTimeout(transactionsTimeout);
      };
    }, [transactions, navigate]);

  if (!transactions || !account) {
    return (
      <div className="transactionsPageContainerLoading">
        <Header />
        <div className="transactionsPageContainerLoading__content">
          <div className="transactionsPageContainerLoading__content--loader"></div>
            <h1 className="transactionsPageContainerLoading__content--title">Loading...</h1>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="transactionsPageContainer">
      <Header />
        <main className="transactionsPageContainer__content">
        <div className="transactionsPageContainer__account">
          <Account
            key={account._id}
            accountName={account.accountName}
            accountNumber={account.accountNumber}
            balance={account.balance}
            currency={account.currency}
            _id={account._id}
            isOnTransactionsPage={true} 
          />
        </div>
        <div className="transactionsPageContainer__transactions">
          <div className="transactionsPageContainer__transactions--table">
            <h2 className="transactionsPageContainer__transactions--table--title">Date</h2>
            <h2 className="transactionsPageContainer__transactions--table--title">Description</h2>
            <div />
            <h2 className="transactionsPageContainer__transactions--table--title">Amount</h2>
            <h2 className="transactionsPageContainer__transactions--table--title">Balance</h2>
            <div />
          </div>
          
          {transactions.map((transaction) => (
            <Transaction
              key={transaction._id}
              transactionType={transaction.transactionType}
              amount={formatInDollars(transaction.amount)}
              date={transaction.date}
              description={transaction.description}
              notes={transaction.notes}
              balance={formatInDollars(transaction.Balance)}
              category={transaction.category}
              _id={transaction._id}
            />
          ))}
        </div>
      </main>

      <Footer />
      
    </div>
  )
}

export default TransactionsPage