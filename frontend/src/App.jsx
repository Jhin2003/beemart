import "./app.scss"
import Nav from "./components/Nav.jsx";
import ProductList from "./components/ProductList";
import TransactionTab from "./components/TransactionTab";
import getScreenSize from "./utils/getScreenSize";
import LoginPage from "./components/LoginPage";
//import Inheritance from "./tests/inheritance";
import { useState } from "react";
function App() {

 getScreenSize()

 let [isLoggedIn, setIsLoggedIn] = useState(false)
 let [userName, setUserName] = useState({})

 let handleLogin = () =>{
   setIsLoggedIn(true)
 }
 
 let handleUserName = (fName, lName) =>{
   setUserName(
    {
      firstName :fName,
      lastName : lName
    }
   )
 }

 return(
    <div className="container">
      {!isLoggedIn &&<LoginPage  onLogin = {handleLogin}  onUserName = {handleUserName}/>}
      {isLoggedIn &&<Nav name={userName.firstName + " " + userName.lastName}/>}
      {isLoggedIn &&<TransactionTab/>}
    </div>
    
 )
}



export default App
