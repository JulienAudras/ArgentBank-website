import Header from "../components/Header"
import Footer from "../components/Footer"
import Button, {BUTTON_TYPES} from "../components/Button"
import {useSelector, useDispatch} from "react-redux"

import "../style/style.css"




const AccountsPage = () => {
  return (
    <div className="accountsPageContainer">
      <Header />
      <div>AccountsPage</div>
      <Footer />
    </div>
  )
}

export default AccountsPage