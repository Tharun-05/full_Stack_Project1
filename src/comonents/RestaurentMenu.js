import { useParams } from "react-router-dom";
import RestaurentDetails from "../../useful/particularRestaurent"
import Shimmer from "./Shimmer";
const RestaurentManu=()=>{
    const params=useParams();
    const Restaurent=RestaurentDetails(params.id);
    return !Restaurent?<Shimmer/>:(
        <>
        <h1>Restaurent id:{params.id}</h1>
        <h1>Restaurent name:{params.name}</h1>
        <img src={Restaurent.url}></img>
        <div className="MenuCuisines">
                <h2>Menu:</h2>
                {/* Mapping through the cuisines array and rendering each cuisine */}
                { Restaurent.cuisines && Restaurent.cuisines.map((cuisine) => (
                    <div>{cuisine}</div>
                ))}
                
                </div>
        </>
    );
};
export default RestaurentManu;