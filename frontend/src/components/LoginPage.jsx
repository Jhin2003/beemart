import "./loginPage.scss"
import Button from "./Button"


import { useState } from "react"

import LoginForm from "./LoginForm"
import SignupForm from "./Signupform"

function LoginPage({onLogin, onUserName}){

    const [willSignUp, setWillSignUp] = useState(false)

    const handleLogin = () => {
        onLogin()
    }
    
    const handleWillSignup = () =>{
        setWillSignUp(!willSignUp)
    }  

 
    
  
   
    return(
        <div className="login-page">
         <div className="login-page-content">
         <h1 className="login-label">Beemart</h1>    
        {!willSignUp ? <LoginForm  onLogin = {handleLogin} onUserName = {onUserName} onSignup = {handleWillSignup}/> 
        : <SignupForm onSignUp = {handleLogin} onLogin = {handleWillSignup} />}
       
         </div>
        </div>  
    )
}

export default LoginPage