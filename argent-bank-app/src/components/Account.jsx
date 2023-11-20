import Button, {BUTTON_TYPES} from "./Button";
import {useNavigate} from "react-router-dom";
import { useDispatch } from "react-redux";
import {setSelectedAccount} from "../redux";

const Account = (props) => {
  const dispatch = useDispatch();
  const formattedBalance = (props.balance/100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const navigate = useNavigate();
  const handleViewtransactionsClick = () => {
    dispatch(setSelectedAccount(props._id)); 
    navigate("/transactions");
  };
  const handleBackToaccountsClick = () => {
    dispatch(setSelectedAccount(null)); 
    navigate("/accounts");
  }
  return (
    <div className="account" id={props._id}>
      <div className="account__accountContentWrapper">
        <p className="account__accountContentWrapper--name">
          {props.accountName} ({props.accountNumber})
        </p>
        <p className="account__accountContentWrapper--balance">
          {props.currency}{formattedBalance}
        </p>
        <p className="account__accountContentWrapper--availableBalance">
          Available Balance
        </p>
      </div>
      <div className="account__accountContentWrapper cta">
        {props.isOnTransactionsPage ? (
          <Button
          type={BUTTON_TYPES.PRESSABLE}
          onClick={handleBackToaccountsClick}
          className="account__accountContentWrapper--button"
        >
          Back to accounts
        </Button>
        ) : (
          
          <Button
          type={BUTTON_TYPES.PRESSABLE}
          onClick={handleViewtransactionsClick}
          className="account__accountContentWrapper--button"
        >
          View Transactions
        </Button>
        )}
      </div>
    </div>
  )
}
export default Account