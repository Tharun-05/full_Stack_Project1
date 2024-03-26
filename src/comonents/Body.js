import { Containers } from "./Containers";
import { arrDetails } from "../../useful/Detailsarr";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../../useful/useOnline";
// function filterData(searchText,arrDetails){
//     return arrDetails.filter(res=>res.name.toLowerCase().includes(searchText.toLowerCase())||res.cuisines[0].toLowerCase().includes(searchText.toLowerCase()));
// }
function filterData(searchText, arrDetails) {
    return arrDetails.filter(res => {
        return res.name.toLowerCase().includes(searchText.toLowerCase()) || // Check if name matches
            res.cuisines.some(cuisine => cuisine.toLowerCase().includes(searchText.toLowerCase())); // Check if any cuisine matches
    });
}
const Body=()=>{
    const[searchText,setSearchText]=useState("");
    const[allrestaurent,setAllRestaurent]=useState([]);
    const[filteredRestaurents,setfilteredRestaurents]=useState([]);
 useEffect(()=>{
getRestaurents();
 },[]);
async function getRestaurents(){
        // const data=arrDetails;
        fetch("https://full-stack-project1-1.onrender.com/api/restaurent/").then((res)=>res.json()
        ).then((restaurants)=>{
            // setAllRestaurent(restaurants);
            setAllRestaurent(restaurants);
        setfilteredRestaurents(restaurants);
        }).catch((err)=>console.log(err));
}
const isOnline=useOnline();
if(!isOnline){
    return <h1>Your are offline!please make sure your internet connection.</h1>
}
    return allrestaurent.length===0?<Shimmer/>:(<>
    <div className="navBar">
        <div className="SearchBar">
           <input type="search" onChange={(e)=>setSearchText(e.target.value) }  value={searchText} placeholder="Search for Restaurants/dishes" className="search" size={50}></input>
           <button onClick={()=>{
            const data=filterData(searchText,allrestaurent);
            setfilteredRestaurents(data);
           }}>Search</button>
           <button onClick={()=>{
            const filterrest=filteredRestaurents.filter((restaurant)=>restaurant.Rating>4);
            setfilteredRestaurents(filterrest);
           }}>Top rated </button>
        </div> 
        
        <div className="container">
            {
                
                filteredRestaurents.map((rest)=> {
                    
                    return(
                        <Link to={"/Restaurents/"+rest.name+"/"+rest._id}>
                    <Containers key={rest._id} details={rest}/>
                    </Link>
                    )
                     
                })
                // arrDetails.forEach(rest=> <Containers details={rest}/>)
            }
        </div>   
    </div>
    </>)
}
    
    
export default Body;