import { useState } from "react";
import {useForm} from "react-hook-form";
import { useDispatch, useSelector} from "react-redux";
import { fetchChangeAccount, saveUserProfile } from "../redux";
import Button, {BUTTON_TYPES} from "../components/Button";
import "../style/style.css";

const User = () => {
    const dispatch = useDispatch();
    const profile = useSelector((state) => state.userData.profile);
    // console.log("initialUserName ", initialUserName);
    // const firstNameFromApi = profile.firstName;
    // const [originalUserName, setOriginalUserName] = useState(profile.userName);
    const [userName, setUserName] = useState(profile.userName);
    // const lastName = profile.lastName;
    // const firstName= profile.firstName;
    const [lastName, setLastName] = useState(profile.lastName);
    const [firstName, setFirstName] = useState(profile.firstName);

    const {register, handleSubmit} = useForm({
        defaultValues: {
            userName: profile.userName,
            firstName: profile.firstName,
            lastName: profile.lastName,
        }
      });

    const onSubmit = async (data) => {
        // if(event){
        // event.preventDefault();
        // }        
        console.log("data on submit user form", data);
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
        };
        }catch(error) {
            console.log("error from submit user form", error);
        }
        console.log("saveduserProfile ", profile);

    }
    // const handleCancel = () => {
    //     setUserName(originalUserName);
    //   };



  return (
    <div>
        <h2>Edit user info</h2>
        <form className="editUserForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="editUserForm__Container">
                <label className="editUserForm__Container--label">User name:</label>
                <input {...register("userName")}
                    className="editUserForm__Container--input"
                    type="text" 
                    name="userName" 
                    defaultValue={userName}
                    onChange={e => setUserName(e.target.value)}
                />
            </div>
            
            <div className="editUserForm__Container">
                <label className="editUserForm__Container--label">First name:</label>
                <input {...register("firstName")}
                    className="editUserForm__Container--input greyedOut"
                    type="text" 
                    name="firstName" 
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)} 
                    readOnly 
                />
            </div>
            
            <div className="editUserForm__Container">
                <label className="editUserForm__Container--label">Last name:</label>
                <input {...register("lastName")}
                    className="editUserForm__Container--input greyedOut" 
                    type="text" 
                    name="lastName" 
                    value={lastName}
                    onChange={e => setLastName(e.target.value)} 
                    readOnly 
                />
            </div>

            <div className="editUserForm__Container">
                <Button 
                    type={BUTTON_TYPES.SUBMIT}  
                    title="Sign In" 
                    className="signInPageButton">
                    Save
                </Button>
                <Button 
                type={BUTTON_TYPES.Green}
                title="Cancel"
                className="CancelButton"
                // onClick={handleCancel}

                >
                    Cancel
                </Button>
            </div> 
        </form>   
    </div>
  )
}

export default User