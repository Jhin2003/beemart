import "./productCard.scss"

function ProductCard({ name, price, location, imageURL }) {

    return (
        <div className="product-card">
            <img src={'http://Localhost:3000' + imageURL} alt="z" width="100%" height="70%" loading="lazy"></img>
            <p className="name">{name}</p>
            <div className="price-location-container">
                <p className="price">{price}</p>
                <p className="location">{location}</p>
            </div>


        </div>
    )
}

export default ProductCard