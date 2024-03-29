import { useParams } from "react-router-dom";
import RestaurentDetails from "../../useful/particularRestaurent"
import Shimmer from "./Shimmer";
const RestaurentManu=()=>{
    const params=useParams();
    const Restaurent=RestaurentDetails(params.id);
    // shows the exact location of the given latitude and longitude
    console.log(Restaurent);
    const constructMapsLink = () => {
    if (Restaurent && Restaurent.latitude && Restaurent.longitude) {
        const latitude = Restaurent.latitude;
        const longitude = Restaurent.longitude;
        const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
        console.log("Constructed Maps Link:", mapsLink); // Log the constructed URL for debugging
        return mapsLink;
    }
    return null;
}; 
// shows Restaurants with the name that user wants in google map
// const constructMapsLink = () => {
//     if (Restaurent && Restaurent.name) {
//         const restaurantName = encodeURIComponent(Restaurent.name);
//         const mapsLink = `https://www.google.com/maps?q=${restaurantName}`;
//         console.log("Constructed Maps Link:", mapsLink); // Log the constructed URL for debugging
//         return mapsLink;
//     }
//     return null;
// };
    const mapsLink = constructMapsLink();
    return !Restaurent?<Shimmer/>:(
        <>
        <div className="restaurantPage">
            <div>
            <h1>Restaurent name:{params.name}</h1>
            <img src={Restaurent.ImageUrl}></img>
            </div>
            <div className="aboutrest">
                <p>Step into our restaurant and experience a culinary journey like no other. From the moment you walk through our doors, 
                    you'll be greeted with an ambiance that sets the stage for an unforgettable dining experience. Our menu boasts a tantalizing 
                    array of dishes crafted with the finest ingredients, each bursting with flavor and expertly prepared by our talented chefs. 
                    Whether you're craving classic comfort food or adventurous global flavors, we have something to satisfy every palate. 
                    Our commitment to excellence extends beyond the kitchen, as our attentive staff ensures every guest feels welcomed and well 
                    taken care of. Join us for a meal to remember, where great food and exceptional service come together to create memories that 
                    linger long after the last bite.{mapsLink && (
                    <p>
                        <a href={mapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </p>
                )}
                </p>
                
            </div>
        </div>
        
        <div className="MenuCuisines">
                <h1>Menu:</h1>
                {/* Mapping through the cuisines array and rendering each cuisine */}
                { Restaurent.cuisines && Restaurent.cuisines.map((cuisine) => (
                    <li>{cuisine +" "+Restaurent.Rating+"💥"}</li>
                ))}
                
                </div>
        </>
    );
};
export default RestaurentManu;