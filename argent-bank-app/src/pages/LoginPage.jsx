import "../style/style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle} from "@fortawesome/free-solid-svg-icons"
import Field, {FIELD_TYPES} from "../components/Field"
import Button, {BUTTON_TYPES} from "../components/Button"
import Header from "../components/Header"
import Footer from "../components/Footer"

const LoginPage = () => {
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
          <Button type={BUTTON_TYPES.SUBMIT}  title="Sign In" className="signInPageButton">
            Sign In
          </Button>
        </form>
      </section>
      <Footer />
    </div>
  )
}

export default LoginPage