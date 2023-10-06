import "./productList.scss"
import ProductCard from "./ProductCard"
import { useState, useEffect } from "react"
import getProducts from "../hooks/getProducts"
import ProductBuyContainer from "./ProductBuyContainer"

function ProductList(){
   let {productsData, isLoading} = getProducts()
  
 
   if(isLoading == false){
        return(
            <div className="product-list"> 
               <ProductBuyContainer>
               {productsData.map((product) => {
                    return( 
                    <ProductCard key = {product.id} name = {product.name} price = {product.price} location = {product.location}imageURL={product.image}/>
                    )
                })}
               </ProductBuyContainer>
            </div>
            )   
   }
}

 export default ProductList