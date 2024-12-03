import "./nav.scss"
import SearchBar from "./SearchBar";
import { FaCircleUser as UserProfile } from "react-icons/fa6";
import { FaCartShopping as Cart } from "react-icons/fa6"
import { FaMessage as Messages } from "react-icons/fa6"
import { IconContext } from "react-icons";


function Nav({ name, onSearch }) {

  const handleSearch = (data) =>{
    onSearch(data)
  }
  return (
    <div className="nav">
      <div className="nav-elements-container">
        <p className="title-label">Beemart</p>
        <SearchBar onSearch = {handleSearch} />

        <p className="username-label">{name}</p>
        <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>

          <UserProfile className="user-profile" size={40}/>
          <Cart className="cart"  size={40}/>
          <Messages className="messages"  size={40}/>
        </IconContext.Provider>

      </div>

    </div >
  )
}

export default Nav