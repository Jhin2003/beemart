import "./productCard.scss"

function ProductCard({name, price, location, imageURL}){
   
    return(
        <div className= "product-card">
            <div className="hoverable"></div>
            <img src= {'http://Localhost:3000' + imageURL}  alt="z" width="100%" height= "70%"></img>
            <p className="name">{name}</p>
            <p className="price">{price}</p>
            <p className="location">{location}</p>  
             
        </div>
    )
}

export default ProductCard