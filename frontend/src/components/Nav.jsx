import "./nav.scss"
import SearchBar from "./searchBar";
import { FaCircleUser as UserProfile }  from "react-icons/fa6";
import {FaCartShopping as Cart} from "react-icons/fa6"
import {FaMessage as Messages} from "react-icons/fa6"
import { IconContext } from "react-icons";


function Nav({ name }) {
    return (
        <div className="nav">
          <div className="nav-elements-container">
          <p className="title-label">Beemart</p>
            <SearchBar />

            <p className="username-label">{name}</p>
            <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
      
            <UserProfile className="user-profile"/>
            <Cart className="cart"/>
            <Messages className = "messages"/>
            </IconContext.Provider>
           
          </div>
          
        </div >
    )
}

export default Nav