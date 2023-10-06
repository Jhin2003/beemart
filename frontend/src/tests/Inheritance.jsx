import { useState } from "react"

function Inheritance(){
  let Home = () =>{
    let [isAuth, setIsAuth] = useState(false)
    let checkAuth = () =>{
        setIsAuth(true)
    }
    return(
       <div>
        {isAuth?(
            <h1>home</h1>
        ): (<Login checkAuth = {checkAuth} />)}
       </div>
    )
  }

  let Login = ({checkAuth}) =>{
    let [verify,setVerify] = useState(false)

    let check = () =>{
        setVerify(true)
    }
    return(
        <>
         <Popup check = {check}/>
         {verify&& <button onClick={checkAuth}>Login</button>}
       
        </>
       
    )
  }
  
  let Popup = ({check}) =>{
    return(
        <button onClick={check}>popup</button>
    )
  }
 
 
    return(
      <Home />
 )
}

export default Inheritance