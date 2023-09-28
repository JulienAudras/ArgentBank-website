import Header from "../components/Header"
import Footer from "../components/Footer"
// import Button, {BUTTON_TYPES} from "../components/Button"
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect} from "react"

import "../style/style.css"

const AccountsPage = () => {
  // const dispatch = useDispatch()
  const logState = useSelector(state => state.auth.isLogged)
  const navigate = useNavigate()

  console.log("logstate", logState)

  useEffect(() => {
    if (!logState) {
      navigate("/login")
    }
  })

  return (
    <div className="accountsPageContainer">
      <Header />
      <div>AccountsPage</div>
      <Footer />
    </div>
  )
}

export default AccountsPage