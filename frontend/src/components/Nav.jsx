import "./nav.scss"
function Nav({name}){
    return(
        <div className= "nav">   
            <div className="label">
                <p>Beemart</p>
                <p>{name}</p>
            </div>
           
        </div>
    )
}

export default Nav