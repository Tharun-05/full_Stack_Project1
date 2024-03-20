const Shimmer=()=>{
    {
        Array(6).map((e)=>{
            console.log(e);
        })

        
    }
    return(
        
        <div className="container">
            {
                Array(6).fill("").map((e,index)=>(
                    <div className="shimmer"></div>
                ))
            }
             
        </div>
        
    )
}
export default Shimmer;