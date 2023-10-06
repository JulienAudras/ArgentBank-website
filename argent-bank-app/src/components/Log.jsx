// import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector} from "react-redux";
import {getProfile} from "../apiCalls"
import {loadUserProfile, saveUserProfile} from "../redux"
import "../style/style.css";



const Log = () => {
  const [firstName, setFirstName] = useState(""); 
  const logState = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (logState) {
  //     const getData = async () => {
  //       getProfile(logState).then((response) =>
  //         dispatch({
  //           type: "userData/profile",
  //           payload: response.data.body,
  //         })
  //       );    
  //     };
  //     getData();
  //   }
  // }, [dispatch, logState]);

  useEffect(() => {
    if (logState) {
      dispatch(loadUserProfile());
      getProfile(logState)
        .then((response) => {
          console.log("response ", response);
          const firstNameFromApi = response.firstName;
          setFirstName(firstNameFromApi);
          dispatch(saveUserProfile(response));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [dispatch, logState]);
 
  const navigate = useNavigate(); 
 

  const handleLogOut = () => {
    dispatch({ type: "auth/logout" });
    navigate("/login");
    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken"); 
  };


  return (
    <div className="loginButtonsContainer">
      {logState ? (
        <div>
          <Link to="/user" className="main-nav-item">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="main-nav-item__signInIcon"
            />
            {firstName}
          </Link>
          <button className="main-nav-item logOutButton" onClick={handleLogOut}>
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="main-nav-item__signInIcon"
            />
            Sign Out
          </button>
        </div>
      ) : (
        <Link to="/login" className="main-nav-item">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="main-nav-item__signInIcon"
          />
          Sign In
        </Link>
      )}
    </div>
  );
};

export default Log;