import "../style/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle} from "@fortawesome/free-solid-svg-icons"
import Field, {FIELD_TYPES} from "../components/Field"
import Button, {BUTTON_TYPES} from "../components/Button"
import Header from "../components/Header"
import Footer from "../components/Footer"
import {useSelector, useDispatch} from "react-redux"
import { Navigate } from "react-router-dom"
import { useState, useEffect} from "react"


const LoginPage = () => {

  const [shouldRedirect, setShouldRedirect] = useState(false);

  const dispatch = useDispatch();

  const logState = useSelector(state => state.isLogged);

  console.log("logstate", logState);

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("submit")
    dispatch({type: "isLogged/login"})
  }

  useEffect(() => {
    if (logState) {
      setShouldRedirect(true)
    }
  }, [logState])

  if (shouldRedirect) {
    return <Navigate to="/accounts" />
  }

  return (
    <div className="loginPageContainer">
      <Header />
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} className="sign-in-content__userIcon"/>
        <h1>Sign In</h1>
        <form>
          
            <Field
              type={FIELD_TYPES.TEXT}
              label="Username"
              name="username"
              isRequired={true}
              inputClassName="loginInputField__input"
              labelClassName="loginInputField__label"
              />
          
            <Field
              type={FIELD_TYPES.PASSWORD}
              label="Password"
              name="password"
              isRequired={true}
              inputClassName="loginInputField__input" 
              labelClassName="loginInputField__label"
              />
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <Button type={BUTTON_TYPES.SUBMIT}  title="Sign In" className="signInPageButton" onClick={handleSubmit}>
            Sign In
          </Button>
        </form>
      </section>
      <Footer />
    </div>
  )
}

export default LoginPage