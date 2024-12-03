import { useState } from "react"
import "./productCard.scss"

function ProductCard({ id ,name, description, price, location, imageURL, onclick }) {
    const [isClicked, setIsClicked] = useState(false)
    const handleClick = () =>{
        setIsClicked(!isClicked)
    }
    if(!isClicked){
        return (
            <div className="product-card" id={id} onClick={handleClick}>
                <img src={'http://Localhost:3000' + imageURL} alt="z" width="100%" height="70%" loading="lazy"></img>
                <p className="name">{name}</p>
                <div className="price-location-container">
                    <p className="price">{price}</p>
                    <p className="location">{location}</p>
                </div>
            </div>
        )
    }
    else if(isClicked){
        return(
            <div className="product-card expanded" id={id} >
            <img src={'http://Localhost:3000' + imageURL} alt="z" width="40%" height="60%" loading="lazy"></img>
            <p className="name">{name}</p>
            <div className="price-location-container">
                <p className="price">{price}</p>
                <p className="location">{location}</p>
                <p className="description">{description}</p>
                <button onClick={handleClick}>sss</button>
            </div>
        </div>
        )
    }

}

export default ProductCard