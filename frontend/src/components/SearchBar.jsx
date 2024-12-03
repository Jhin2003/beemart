import "./searchBar.scss"
import { useEffect, useRef, useState } from "react";
import getProducts from "../hooks/getProducts";


function SearchBar({onSearch}) {
  let {productsData, isLoading} = getProducts()
  const [searchQuery, setSearchQuery] = useState('');
  
  

  const handleSearch = (e) =>{ 
    e.preventDefault()
    let results = productsData.filter(item =>{
      return  item.name.toLowerCase().includes(searchQuery.toLowerCase())
    })
    onSearch(results)
  }
 
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
 return(
    <form className ="search-bar" onSubmit={handleSearch}>
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleInputChange}
     />
    <button type="submit">Search</button>
  </form>
 )
}


export default SearchBar