// import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import "../style/style.css";

const temporaryName = "John Doe";

const Log = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const logState = useSelector((state) => state.auth.isLogged);

  const handleLogOut = () => {
    dispatch({ type: "auth/logout" });
    navigate("/login");
    localStorage.removeItem("authToken"); 
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
            {temporaryName}
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