import Header from "../components/Header";
import Footer from "../components/Footer";
import User from "../components/User";
import Button, {BUTTON_TYPES} from "../components/Button";
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState} from "react";
import { changeUserSlice } from "../redux";
import "../style/style.css";

const AccountsPage = () => {
  // const dispatch = useDispatch()
  const logState = useSelector(state => state.auth.isLogged);
  const navigate = useNavigate();
  const profile = useSelector((state) => state.userData.profile);
  const firstNameFromApi = profile.firstName;
  const lastNameFromApi = profile.lastName;
  const dispatch = useDispatch();
  const userComponentState = useSelector((state) => state.changeUser.isOpen);
  console.log("userComponentState", userComponentState);
  
  
  
  const hideUser = () => {
    dispatch(changeUserSlice.actions.closeChangeUser());
  }
  
  
  const openChangeUser  = changeUserSlice.actions.openChangeUser;
  
  
  const handleEdit = () => {
    dispatch(openChangeUser());
  }


  console.log("logstate", logState)
 
  useEffect(() => {
    if (!logState) {
      navigate("/login")
    }
  })

  useEffect(() => {
    if (!userComponentState) {
      hideUser();
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
       
       {!userComponentState &&(
        <Button 
          type={BUTTON_TYPES.PRESSABLE} 
          onClick={handleEdit}
          className="accountsPageContainer__topSection--button"
          >
          Edit Name
        </Button>
        )}
       
       
      </div>
      <User />
      
      <Footer />
    </div>
  )
}

export default AccountsPage