import { useState,useEffect } from "react"
import { arrDetails } from "./Detailsarr"
 const RestaurentDetails=(id)=>{
    const[Restaurent,setRestaurent]=useState(null);
    useEffect(()=>{
        getInfo();
    },[id])
    async function getInfo(){
        // const selectedRestaurant = arrDetails.find(item => item.id === id);
        fetch("https://full-stack-project1-1.onrender.com/api/restaurent/").then((res)=>res.json()
        ).then((restaurants)=>{
            // setAllRestaurent(restaurants);
            const selectedRestaurant =restaurants.find(item => item._id === id);
            setRestaurent(selectedRestaurant);
        }).catch((err)=>console.log(err));
        //  setRestaurent(selectedRestaurant);
    }
return Restaurent;
 }
 export default RestaurentDetails;