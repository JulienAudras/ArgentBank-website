import Header from "../components/Header";
import Footer from "../components/Footer";
import User from "../components/User";
import Account from "../components/Account";
import Button, {BUTTON_TYPES} from "../components/Button";
import {useSelector, useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect} from "react";
import { changeUserSlice, fetchGetAccounts, fetchUserProfile } from "../redux";
import "../style/style.css";

const AccountsPage = () => {
  const logState = useSelector(state => state.auth.isLogged);
  const navigate = useNavigate();
  const profile = useSelector((state) => state.userData.profile);
  const firstNameFromApi = profile.firstName;
  const lastNameFromApi = profile.lastName;
  const dispatch = useDispatch();
  const userComponentState = useSelector((state) => state.changeUser.isOpen);
  const userId = profile.id;
    
  useEffect(() => {
    if (!profile) {
        dispatch(fetchUserProfile());
    }
}, [dispatch, profile]);

  useEffect(() => {
    dispatch(changeUserSlice.actions.closeChangeUser());
  }, [dispatch])

  const openChangeUser  = changeUserSlice.actions.openChangeUser;
   
  const handleEdit = () => {
    dispatch(openChangeUser());
  }

  useEffect(() => {
    if (!logState) {
      navigate("/login")
    }
  });

  useEffect(() => {
    dispatch(fetchGetAccounts(userId));
  }, [dispatch, logState, userId]);

  const accounts = useSelector((state) => state.accounts.accounts);
  console.log("accounts", accounts);
  

  useEffect(() => {
    const accountsTimeout = setTimeout(() => {
      if (!accounts) {
        navigate('/');
      }
    }, 3000);

    return () => {
      clearTimeout(accountsTimeout);
    };
  }, [accounts, navigate]);

  if (!accounts) {
    return (
      <div className="accountsPageContainerLoading">
        <Header />
        <div className="accountsPageContainerLoading__content">
          <div className="accountsPageContainerLoading__content--loader"></div>
          <h1 className="accountsPageContainerLoading__content--title">Loading...</h1>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="accountsPageContainer">
      <Header />
      <section className="accountsPageContainer__topSection">
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
        </section>
          <User className={"accountsPageContainer__userComponent"} />
      <section className="accountsPageContainer__mainSection">
        {accounts.map(account => (
          <Account key={account._id} {...account} />
        ))}
      </section>
      <Footer />
    </div>
  )
}
export default AccountsPage