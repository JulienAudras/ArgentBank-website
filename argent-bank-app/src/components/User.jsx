import { useEffect, useState } from "react";
import {useForm} from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {fetchUserProfile, fetchChangeAccount, saveUserProfile} from "../redux";
import { changeUserSlice } from "../redux";
import Button, {BUTTON_TYPES} from "../components/Button";
import "../style/style.css";

const User = ({className}) => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.userData.profile);
    console.log("profile from user", profile);
    const [userName, setUserName] = useState(profile.userName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [firstName, setFirstName] = useState(profile.firstName);
    const navigate = useNavigate();
    // const isOpenState = useSelector((state) => state.changeUser.isOpen);
    const closeChangeUser  = changeUserSlice.actions.closeChangeUser;
    const userComponentState = useSelector((state) => state.changeUser.isOpen);
    const hideUserComponent = () => {
        dispatch(changeUserSlice.actions.closeChangeUser())
 ;   }
    
    useEffect(() => {
        if (!profile) {
            dispatch(fetchUserProfile());
        }
    }, [dispatch, profile]);
    

    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
    if (profile) {
        setValue("userName", profile.userName);
        setValue("firstName", profile.firstName);
        setValue("lastName", profile.lastName);
    }
    }, [profile, setValue]);

    const onSubmit = async (data) => {
        
        try{
            const user = {
                userName: data.userName,
                firstName: profile.firstName,
                lastName: profile.lastName
            }
        
        console.log("user from submit user ", user);
        const response = await dispatch(fetchChangeAccount(user));
        if (response) {
            // response.setUserName(data.userName);
            dispatch(saveUserProfile({ ...profile, userName: data.userName }))
            hideUserComponent();
        };
        if (window.location.pathname === "/user") {
            navigate("/accounts");
        }

        }catch(error) {
            console.log("error from submit user form", error);
        }
    }

    const handleCancel = () => {
        if (window.location.pathname === "/user") {
            dispatch(closeChangeUser());
            navigate("/accounts");
        } else{
            dispatch(closeChangeUser());
        }
    }
    if (userComponentState && profile) {
  return (
    <div className={className}>
        <h2>Edit user info</h2>
        <form className="editUserForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="editUserForm__container">
                <label className="editUserForm__container--label">User name:</label>
                <input {...register("userName")}
                    className="editUserForm__container--input"
                    type="text" 
                    name="userName" 
                    defaultValue={userName}
                    onChange={e => setUserName(e.target.value)}
                />
            </div>
            
            <div className="editUserForm__container">
                <label className="editUserForm__container--label">First name:</label>
                <input {...register("firstName")}
                    className="editUserForm__container--input greyedOut"
                    type="text" 
                    name="firstName" 
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)} 
                    readOnly 
                />
            </div>
            
            <div className="editUserForm__container">
                <label className="editUserForm__container--label">Last name:</label>
                <input {...register("lastName")}
                    className="editUserForm__container--input greyedOut" 
                    type="text" 
                    name="lastName" 
                    value={lastName}
                    onChange={e => setLastName(e.target.value)} 
                    readOnly 
                />
            </div>

            <div className="editUserForm__container">
                <Button 
                    type={BUTTON_TYPES.SUBMIT}  
                    title="Sign In"
                    data-testid="Save"
                    className="editUserForm__container--submitButton" 
                   >
                    Save

                </Button>
                <Button 
                title="Cancel"
                className="editUserForm__container--cancelButton"
                onClick={handleCancel}
                >
                    Cancel
                </Button>
            </div> 
        </form>   
    </div>
  );
} else {
    return null;
}
}

export default User