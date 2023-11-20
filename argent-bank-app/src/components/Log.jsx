import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector} from "react-redux";
import { fetchUserProfile } from "../redux";

const Log = () => {
  const logState = useSelector((state) => state.auth.isLogged);
  const dispatch = useDispatch();

  useEffect(() => {
    if (logState) {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, logState]);

  const profile = useSelector((state) => state.userData.profile);
  const userNameFromApi = profile.userName;
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
            {userNameFromApi}
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