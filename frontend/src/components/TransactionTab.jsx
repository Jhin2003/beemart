import "./transactionTab.scss"
import Button from "./Button"
import { useState, useEffect } from "react"
import ProductList from "./ProductList"
import ProductSellList from "./ProductSellList"
function TransactionTab(){
let [willSell, setWillSell] = useState(false)
useEffect(() =>{
  console.log(willSell)
}, [willSell])
return(
      <>
      {willSell? <ProductSellList /> : <ProductList/>}
      <div className="transaction-tab">   
        {willSell &&<Button onClick = {() => setWillSell(false)} label= "Buy" />}
        {!willSell &&<Button onClick = {() => setWillSell(true)} label= "Sell" />}
      </div>  
      </>
        
)

}

export default TransactionTab