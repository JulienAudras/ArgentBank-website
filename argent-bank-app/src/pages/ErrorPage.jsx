import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Button, { BUTTON_TYPES } from '../components/Button'
import "../style/style.css"

const ErrorPage = () => {
    const logState = useSelector(state => state.auth.isLogged);
    const profile = useSelector((state) => state.userData.profile);
    const navigate = useNavigate();
  
    if (logState) {
  return (
    <div className="errorPageContainer">
        <Header />
            <main className="errorPageContainer__content">
            <h1>
                Sorry {profile.firstName}, <br /> 
                something went wrong.
            </h1>
            <Button
                type={BUTTON_TYPES.PRESSABLE}
                onClick={() => navigate("/accounts")}
                className="errorPageContainer__content--button"      
                >
                Go back to your accounts
                </Button>
            </main>
        <Footer />
    </div>
  )
}
    else {
        return (
            <div className="errorPageContainer">
                <Header />
                <section className="errorPageContainer__content">
                <h1>
                    Sorry,<br /> 
                    something went wrong.
                </h1>
                <Button
                    type={BUTTON_TYPES.PRESSABLE}
                    onClick={() => navigate("/")}
                    className="errorPageContainer__content--button"
                >
                    Go back to home page
                </Button>
                </section>
                <Footer />
            </div>
          )
    }
}
export default ErrorPage