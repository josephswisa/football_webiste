import React, {useState} from 'react';
import "../css/LoginPage.css";
import {SignUp} from "./SignUp";
import {StartMatch} from "./StartMatch";
import {NavLink, useHistory} from "react-router-dom";
import {sendApiGetRequest, sendApiPostRequest} from "../ApiRequests";



function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error , setError]= useState(null);
    let user = {id: '',username: '', token: '',creationDate:''};




const onLogin=()=> {
    let signInResponse ="";
    sendApiPostRequest("http://localhost:8989/sign-in?", {username: username, password: password}, (response) => {
            signInResponse = response.data;
    });
    if(signInResponse.success) {
        window.$userDetails.loggedIn = true;
        user = signInResponse.user;

    }else
    {
        setError(signInResponse.errorCode);

    }

}




    return (
        <>


                <div className="login-container">
                    <span className="login-title">Welcome To Login Page</span>
                    Doesn't have a user? <NavLink to={"/signup"} >Sign  up</NavLink>
                    <div className="fields-container">
                        <div>
                            <div className="fields-text">Username</div>
                            <input value={username} onChange={(event => setUsername(event.target.value))}/>
                        </div>

                        <div>
                            <div className="fields-text">Password</div>
                            <input value={password} onChange={(event => setPassword(event.target.value))}/>
                        </div>
                    </div>
                    <div>
                        <button className="login-button" onClick={onLogin}>
                            Login
                        </button>
                        <br/>
                        {
                            error===1 &&
                            <div>itamar on credentials </div>
                        }
                    </div>
                </div>



            </>







    );
}

export default LoginPage;