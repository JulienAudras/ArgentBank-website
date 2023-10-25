
import "../style/style.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle} from "@fortawesome/free-solid-svg-icons"
import {useForm} from "react-hook-form"
import {useDispatch, useSelector } from "react-redux"
import Button, {BUTTON_TYPES} from "../components/Button"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { loginUser } from "../apiCalls"

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const {register, handleSubmit, reset} = useForm({
    defaultValues: {
      userName: "",
      password: ""
    }
  });
  
  const logState = useSelector((state) => state.auth.isLogged);
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null);
  let userNameValue = "";
  let passwordValue = "";
  
  useEffect(() => {
    if (logState) {
      navigate("/accounts");
    }
  }, [logState, navigate]);

  const dispatch = useDispatch();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  const onSubmit = (data) => {
   
    userNameValue = data.userName;
    passwordValue = data.password;
    const user = {
      userName: userNameValue,
      password: passwordValue
    }
    
    loginUser(user)
    .then((token) => {
      dispatch({
        type: "auth/login",
        isLogged: true,
      });
      sessionStorage.setItem("authToken", token);
      setShouldRedirect(true);
      reset();
    })
    .catch((error) => {
      console.error("Error during fetch request:", error);
      setErrorMessage(error.message); 
    });
  };

    useEffect(() => {
    if (shouldRedirect) {
      navigate("/accounts") 
    }
  })

  return (
        <div className="loginPageContainer">
          <Header />
          <section className="sign-in-content">
            <FontAwesomeIcon icon={faUserCircle} className="sign-in-content__userIcon"/>
            <h1>Sign In</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="inputField">    
                  <label className="loginLabel">Username</label>
                  <input {...register('userName')}
                    type= "text"
                    name="userName"
                    className="loginInputField--input"
                    autoComplete="off"  
                    />
                  <div className="loginBetWeen"></div>
                  <label className="loginLabel">Password</label>
                  < input {...register('password')}
                    type="password"
                    name="password"
                    className="loginInputField--input"
                    autoComplete="off"           
                   />
                </div>
                <div className="input-remember">
                  <input type="checkbox" 
                  id="remember-me"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <Button type={BUTTON_TYPES.SUBMIT}  
                  title="Sign In" 
                  className="signInPageButton">
                  Sign In
                </Button>
                {errorMessage && (
                    <div className="error-message">
                    {errorMessage}
                    </div>
                  )}
              </form>
          </section>
          <Footer />
        </div>
      )
}
export default LoginPage

