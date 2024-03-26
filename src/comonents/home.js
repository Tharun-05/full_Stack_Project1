export const Home=(props)=>{
    const {name,cuisines,ItemUrl,Rating,time}=props.details;
    const cuisineToShow = cuisines && cuisines.length > 0 ? cuisines[0] : "";
    return(<>
    <div className="Homeparent">
        <img src={ItemUrl}></img>
        <div className="child1">
            <h2 className="cusiens">{cuisineToShow+" "}</h2>
        </div>
        
    </div>
    </>)
}