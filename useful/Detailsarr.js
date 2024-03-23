
export const arrDetails=[{
   "id": "11091",
    "time":"5min",
    "itemurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS56Doy-cgX33EjAb5HdFFIOn--MdAqEff7sxKkv6-GN9vr2B0WG9NEfAbSlhOT9DpYGEk&usqp=CAU",
    "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqQS4wqE0tmSUxFS_ByjZqLCUTHySyGJ65A&usqp=CAU",
"name": "Pizza Hut",
"locality": "Attapur",
"areaName": "Attapur",
"costForTwo": "₹350 for two",
"cuisines": [
"Pizzas",
"milk",
],
"Rating": 4,
 },
 {"id": "360967",
   "name": "Wow! Momo",
 "locality": "Vishwa Bhawan",
 "areaName": "Himayath Nagar",
 "costForTwo": "₹300 for two",
 "cuisines": [
  "Desserts",
 "Asian",
 "Tibetan",
 "Healthy Food",
 "Chinese",
 "Snacks",
 "Continental",
 "Beverages"
 ],
 "Rating": 4.3,
 "time":"30min",
 "itemurl":"https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dessert-main-image-molten-cake-0fbd4f2.jpg?quality=90&webp=true&resize=300,272",
   "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-j86x53epbegGsdzM-erUEA4abjPdpl2Grw&usqp=CAU"},

 {"id": "6994",
   "name": "Santosh Dhaba Exclusive",
 "locality": "Abids",
 "areaName": "Koti",
 "costForTwo": "₹300 for two",
 "cuisines": [
 "Biryani",
 "Chinese",
 "Italian",
 "Mexican",
 "Desserts"
 ],
 "Rating": 4.3,
 "time":"10min",
 "itemurl":"https://assets.cntraveller.in/photos/63997ddc9ee4918a0f9a6861/master/pass/biryani%20in%20hyderabad.jpg",
 "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXO3W0JXGET939wVbUMZ3vRr557j8AbahVQ&usqp=CAU"},

 {"id": "128084",
 "name": "Barbeque Nation",
 "locality": "ANR Center",
 "areaName": "Banjara Hills",
 "costForTwo": "₹300 for two",
 "cuisines": [
 "North Indian",
 "Barbecue",
 "Biryani",
 "Kebabs",
 "Mughlai",
 "Desserts"
 ],
 "Rating": 3.9,
 "time":"30min",
 "itemurl":"https://www.shoutlo.com/uploads/articles/header-img-places-to-get-north-indian-food-in-hyderabad.jpg",
 "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXO3W0JXGET939wVbUMZ3vRr557j8AbahVQ&usqp=CAU"},

 {
   "id": "262087",
"name": "Imperial Multi-Cusine Restaurant",
"locality": "Banjara Hills",
"areaName": "Redhills",
"costForTwo": "₹400 for two",
"cuisines": [
  "Tandoor",
"Biryani",
"Chinese",
"Indian",
"Kebabs",

],
"Rating": 4.2,
 "time":"2min",
 "itemurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1GteCNtbM6qWjml8feiRQlq3oxZjKM44A-A&usqp=CAU",
 "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXO3W0JXGET939wVbUMZ3vRr557j8AbahVQ&usqp=CAU"},

 {
   "id": "168402",
"name": "NIC Ice Creams",
"locality": "Hakeempet",
"areaName": "Toli Chowki",
"costForTwo": "₹120 for two",
"cuisines": [
"Ice Cream",
"Desserts"
],
"Rating": 4.5,
 "time":"25min",
 "itemurl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReR12xx1BViXTiCrV1xHrSxUFTuzdp42mF8Q&usqp=CAU",
 "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXO3W0JXGET939wVbUMZ3vRr557j8AbahVQ&usqp=CAU"},

 {
   "id": "59643",
"name": "Baskin Robbins - Ice Cream Desserts",
"locality": "AC guards Rd.",
"areaName": "Redhills",
"costForTwo": "₹300 for two",
"cuisines": [
  "Noodels",
"Desserts",
"Ice Cream"
],
"Rating": 4.3,
 "time":"5min",
 "itemurl":"https://cdn.mygingergarlickitchen.com/images/800px/800px-veg-chezwan-noodles-recipe-9.jpg",
 "url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyXO3W0JXGET939wVbUMZ3vRr557j8AbahVQ&usqp=CAU"},
]
// import { Containers } from "./Containers";
// import { arrDetails } from "../../useful/Detailsarr";
// import { useState } from "react";
// function filterData(searchText,arrDetails){
//     return arrDetails.filter(res=>res.name.includes(searchText))
// }
// const Body=()=>{
//     const[searchText,setSearchText]=useState("");
//     const[allrestaurent,setAllRestaurent]=useState(arrDetails);
//     return(<>
//     <div className="navBar">
//         <div className="SearchBar">
//            <input type="search" onChange={(e)=>setSearchText(e.target.value)} value={searchText} placeholder="Search for dishes" className="search" size={50}></input>
//            <button onClick={()=>{
//             const data=filterData(searchText,arrDetails);
//             console.log(data);
//             setAllRestaurent(data);
//            }}>Search</button>
//         </div> 
//         <div className="container">
//             {
//                 allrestaurent.map(rest=> <Containers key={rest.id} details={rest}/> )
//                 // arrDetails.forEach(rest=> <Containers details={rest}/>)
//             }
//             {/* <Containers details={arrDetails[0]} />
//             <Containers details={arrDetails[1]} />
//             <Containers details={arrDetails[2]}/>
//             <Containers details={arrDetails[3]}/> */}
//             {/* <Containers/>
//             <Containers/>
//             <Containers/>
//             <Containers/>
//             <Containers/>
//             <Containers/> } */}
//         </div>
            
//     </div>
//     </>)
// }
// export default Body;