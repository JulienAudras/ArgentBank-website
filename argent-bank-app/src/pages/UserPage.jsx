import Header from "../components/Header"
import Footer from "../components/Footer"
import User from "../components/User"
import { useEffect } from "react"
import { useDispatch} from "react-redux";
import { changeUserSlice } from "../redux";


const UserPage = () => {
  const dispatch = useDispatch();
  const openChangeUser  = changeUserSlice.actions.openChangeUser;

  useEffect(() => {
    dispatch(changeUserSlice.actions.openChangeUser());
  }, [dispatch, openChangeUser])
  // if (window.location.pathname === "/user") {
  //     dispatch(openChangeUser());}

  return (
    <div className="userPageContainer">
    <Header />
      <div>
          <User />
      </div>
    <Footer />
    </div>
  )
}

export default UserPage