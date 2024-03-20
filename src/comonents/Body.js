import { Containers } from "./Containers";
import { arrDetails } from "../../useful/Detailsarr";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../../useful/useOnline";
function filterData(searchText,arrDetails){
    return arrDetails.filter(res=>res.name.toLowerCase().includes(searchText.toLowerCase())||res.cusiens.toLowerCase().includes(searchText.toLowerCase()));
}
const Body=()=>{
    const[searchText,setSearchText]=useState("");
    const[allrestaurent,setAllRestaurent]=useState([]);
 useEffect(()=>{
getRestaurents();
 },[]);
async function getRestaurents(){
    setTimeout(()=>{
        const data=arrDetails;
        setAllRestaurent(data);
    },100
    )
}
const isOnline=useOnline();
if(!isOnline){
    return <h1>Your are offline!please make sure your internet connection.</h1>
}
    return allrestaurent.length===0?<Shimmer/>:(<>
    <div className="navBar">
        <div className="SearchBar">
           <input type="search" onChange={(e)=>setSearchText(e.target.value) }  value={searchText} placeholder="Search for dishes" className="search" size={50}></input>
           <button onClick={()=>{
            const data=filterData(searchText,arrDetails);
            setAllRestaurent(data);
           }}>Search</button>
        </div> 
        <div className="container">
            {
                
                allrestaurent.map((rest)=> {
                    
                    return(
                    <Link to={"Restaurents/"+rest.name+"/"+rest.id}>
                    <Containers key={rest.id} details={rest}/>
                    </Link>
                    )
                     
                })
               
                // arrDetails.forEach(rest=> <Containers details={rest}/>)
            }
            {/* <Containers details={arrDetails[0]} />
            <Containers details={arrDetails[1]} />
            <Containers details={arrDetails[2]}/>
            <Containers details={arrDetails[3]}/> */}
            {/* <Containers/>
            <Containers/>
            <Containers/>
            <Containers/>
            <Containers/>
            <Containers/> } */}
        </div>
            
    </div>
    </>)
}
    
    
export default Body;