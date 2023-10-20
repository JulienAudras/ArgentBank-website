import Button, {BUTTON_TYPES} from "./Button";
import {useNavigate} from "react-router-dom";
import "../style/style.css";



const Account = (props) => {
  const formattedBalance = (props.balance/100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const navigate = useNavigate();
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
        <Button
          type={BUTTON_TYPES.PRESSABLE}
          onClick={() => navigate("/transactions")}
          className="account__accountContentWrapper--button"
        >
          View Transaction
        </Button>
      </div>
    </div>
  )
}

export default Account