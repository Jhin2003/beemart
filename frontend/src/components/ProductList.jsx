import "./productList.scss"
import ProductCard from "./ProductCard"
import { useState, useEffect } from "react"
import getProducts from "../hooks/getProducts"
import ProductBuyContainer from "./ProductBuyContainer"
import getProductsBySearch from "../hooks/getProductsBySearch"

function ProductList({ buySearchResults }) {
   let { productsData, isLoading } = getProducts()
   let [isClicked, setIsClicked] = useState(false)

   let handleIsClicked = () =>{
      setIsClicked(!isClicked)
   }
   if (buySearchResults.buySearchResults != undefined) {
      console.log(buySearchResults)
      return (
         <div className="product-list">
            <ProductBuyContainer>

               {buySearchResults.buySearchResults.map((product) => {
                  return (
                     <ProductCard key={product.id} id={product.id} name={product.name}
                        description={product.description} price={product.price} location={product.location} imageURL={product.image} />
                  )
               })}
            </ProductBuyContainer>
         </div>
      )
   }
   else if (buySearchResults.buySearchResults == undefined) {
      if (isLoading == false) {
         console.log(productsData)
         return (
            <div className="product-list">
               <ProductBuyContainer>
                  {productsData.map((product) => {
                     return (
                        <ProductCard key={product.id} id={product.id} name={product.name}
                           description={product.description} price={product.price} 
                           location={product.location} imageURL={product.image} onclick={handleIsClicked}/>
                     )
                  })}
                
               </ProductBuyContainer>
            </div>
         )
      }
   }

}

export default ProductList