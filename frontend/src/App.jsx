import "./app.scss"
import Nav from "./components/Nav.jsx";
import ProductList from "./components/ProductList";
import TransactionTab from "./components/TransactionTab";
import getScreenSize from "./utils/getScreenSize";
import LoginPage from "./components/LoginPage";
//import Inheritance from "./tests/inheritance";
import { useRef, useState } from "react";
import getProducts from "./hooks/getProducts";
function App() {

 getScreenSize()
 let {productsData, isLoading} = getProducts()
 let [isLoggedIn, setIsLoggedIn] = useState(false)
 let [searchResults, setSearchResults] = useState(productsData);
 let [IsSearching, SetIsSearching] = useState(false)
 let [userName, setUserName] = useState({})

 console.log(searchResults)
 let handleLogin = () =>{
   setIsLoggedIn(true)
 }
 
 let handleSearch = (results) =>{
  
  setSearchResults(results)
 
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
      {isLoggedIn &&<Nav name={userName.firstName + " " + userName.lastName} onSearch = {handleSearch}/> }
      {isLoggedIn &&<TransactionTab buySearchResults = {searchResults}/>}
    </div>
    
 )
}



export default App
