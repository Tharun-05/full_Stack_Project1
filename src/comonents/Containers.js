export const Containers=(props)=>{
    const {name,cuisines,locality,areaName,costForTwo,ImageUrl,Rating,time}=props.details;
    const cuisineToShow = cuisines && cuisines.length > 0 ? cuisines[0] : "";
    return(<>
    <div className="parent">
        <img src={ImageUrl}></img>
        <div className="parent1">
        <div className="child1">
            <h2>{name}</h2>
            <h2 className="cusiens">{cuisineToShow+" "}</h2>
        </div>
        <div className="child2">
            <h3>{time}</h3>
            <h3>{Rating}</h3>
        </div>
        </div>
        
    </div>
    </>)
}