import { useEffect } from 'react';
import { useState } from 'react';

let getProducts = () => {
    const [productsData, setProductsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() =>{
        fetch('http://Localhost:3000/lol') // Replace with the actual API URL
        .then((response) => response.json())
        .then((data) => {
          setProductsData(data); // Set the fetched data to the state variable
          setIsLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, [])
   
    return {productsData, isLoading}
}


export default getProducts

  
