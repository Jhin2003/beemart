import "./loginPage.scss"
import Button from "./Button"

import { useState } from "react"

import LoginForm from "./LoginForm"

function LoginPage({onLogin, onUserName}){


    const handleLogin = () => {
        onLogin()
    }

  
    
  
   
    return(
        <div className="login-page">
         <div className="login-page-content">
         <h1 className="login-label">Beemart</h1>    
        <LoginForm  onLogin = {handleLogin} onUserName = {onUserName}/>
      
         </div>
        </div>  
    )
}

export default LoginPage