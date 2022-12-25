import React, {useState, useEffect} from 'react';
import "../css/LoginPage.css";
import axios from "axios";
import {sendApiPostRequest} from "../ApiRequests";
import {useHistory} from "react-router-dom";


export function SignUp(){
    const [signUser, setSignUser]= useState('');
    const [signPass, setSignPass]= useState('');
    const [signPassCheck, setSignPassCheck]= useState('');
    const [userData, setUserData]= useState({username:'',password:''})
    const [error, setError] = useState(null);
    const [data,setData] = useState(null);
    const [redirect,setRedirect] = useState(false);
    let history = useHistory();
    let user;



    const onSignup =()=> {
        if((signPass.length >= 8)&&(signPassCheck === signPass)) {
            let newUser={username: signUser, password: signPass}
            setUserData(newUser);
            let signUpResponse ="";
            sendApiPostRequest("http://localhost:8989/create-user?", {username: newUser.username, password: newUser.password}, (response) => {
                signUpResponse = response.data;
            });
            if(signUpResponse.success) {
                window.$userDetails.loggedIn = true;
                user = signUpResponse.user;
                window.$userDetails.userId = user.id;
                window.$userDetails.token = user.token;
                setRedirect(true);



            }else
            {
                setError(signUpResponse.errorCode);
            }
            if(redirect === true){
                history.push("/start-match")

            }
        }
    }



    return (
        <div className="login-container">
            <span className="login-title">Sign Up</span>
            <div className="fields-container">
                <div>
                    <div className="fields-text">Username</div>
                    <input value={signUser} onChange={(event => setSignUser(event.target.value))}/>
                </div>

                <div>
                    <div className="fields-text">Password</div>
                    <input value={signPass} onChange={(event => setSignPass(event.target.value))}/>
                </div>
                <div>
                    <div className="fields-text">Enter password again</div>
                    <input value={signPassCheck} onChange={(event => setSignPassCheck(event.target.value))}/>
                </div>
            </div>
            {(signPass !== signPassCheck) && (signPassCheck.length > 0) &&
                <div>Passwords dont match</div>
            }
            { ((signPass.length < 8)&&(signPass.length !== 0))&&
                <div>Password must contain at least 8</div>
            }
            <div>
                <button className="login-button" onClick={onSignup}>Sign up</button>
            </div>
        </div>

    )
}