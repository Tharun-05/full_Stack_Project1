import { useState,useEffect } from "react"
import { arrDetails } from "./Detailsarr"
 const RestaurentDetails=(id)=>{
    const[Restaurent,setRestaurent]=useState(arrDetails);
    useEffect(()=>{
        getInfo();
    },[id])
    async function getInfo(){
        const selectedRestaurant = arrDetails.find(item => item.id === id);
         setRestaurent(selectedRestaurant);
    }
return Restaurent;
 }
 export default RestaurentDetails;