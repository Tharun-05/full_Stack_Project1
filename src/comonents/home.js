export const Home=(props)=>{
    const {name,cuisines,ItemUrl,Rating,time}=props.details;
    console.log("props are ==>"+name);
    const cuisineToShow = cuisines && cuisines.length > 0 ? cuisines[0] : "";
    return(<>
    <div className="Homeparent">
        <img src={ItemUrl}></img>
    </div>
    </>)
}