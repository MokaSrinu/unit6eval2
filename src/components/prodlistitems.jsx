import "./prodlistitem.css"
const ProdlistItems=(data,deleteprod)=>{
      
    //    const Display=(res)=>{
    //      console.log(data)
    //    }


    //     return (
    //         <>
    //         <Display data={data}/>
    //         </>
    //     )
        

        return (
            <div id="maindiv">
              {data.data
                .map((item) => (
                  <div
                    key={item.id}
                    style={{
                     
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <img src={item.image} alt="" />
                    <h1>Title:{item.title}</h1>{" "}
                    <h1>Gender:{item.gender}</h1>
                    <h1>Category:{item.category}</h1>
                    <h1>Price:{item.price}</h1>
                    <button onClick={()=>deleteprod(item.id)}>DELETE</button>
                  </div>
                ))}
            </div>
          );
     
}
export {ProdlistItems}
// <button onClick={()=>deleteprod(item.id)}>DELETE</button>