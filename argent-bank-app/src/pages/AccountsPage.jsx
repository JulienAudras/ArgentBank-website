import Header from "../components/Header"
import Footer from "../components/Footer"
import Button, {BUTTON_TYPES} from "../components/Button"
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
import { useEffect} from "react"
import "../style/style.css"

const AccountsPage = () => {
  // const dispatch = useDispatch()
  const logState = useSelector(state => state.auth.isLogged);
  const navigate = useNavigate();
  const profile = useSelector((state) => state.userData.profile);
  const firstNameFromApi = profile.firstName;
  const lastNameFromApi = profile.lastName;


  console.log("logstate", logState)

  useEffect(() => {
    if (!logState) {
      navigate("/login")
    }
  })

  return (
    <div className="accountsPageContainer">
      <Header />
      <div className="accountsPageContainer__topSection">
        <h1 className="accountsPageContainer__topSection--title">
          Welcome back <br />
          {firstNameFromApi} {lastNameFromApi}!
        </h1>
        
        <Button 
          type={BUTTON_TYPES.PRESSABLE} 
          onClick={() => navigate("/transfer")}
          className="accountsPageContainer__topSection--button"
          >
          Edit Name
        </Button>
      </div>
      <Footer />
    </div>
  )
}

export default AccountsPage