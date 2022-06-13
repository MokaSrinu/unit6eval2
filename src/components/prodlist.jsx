import React from "react";
import { Prodform } from "./prodform";
import { ProdlistItems } from "./prodlistitems";
const Prodlist = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState(false);
  const [page,setPage]=React.useState(1)

  const getproddetails = (page) => {
    setLoading(true);
    fetch(`http://localhost:3001/proddata?_page=${page}&_limit=5`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        setError(true);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  React.useEffect(() => {
    getproddetails(page);
  }, [page]);


  const deleteprod=(id)=>{
    setLoading(true);
    fetch(`http://localhost:3001/proddata/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setError(false);
        return getproddetails();
      })
      .catch((err) => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  

  return loading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>Error</h1>
  ) : (
    <div>
      <br />
      <Prodform getproddetails />
      <select name="" id="" >
        <option value="">sort</option>
        <option value="asc">low to high</option>
        <option value="dsc">High to low</option>
      </select>
      <select name="" id="">
        <option value="male">Male</option>
        <option value="Female">Female</option>
      </select>
     <ProdlistItems data={data} deleteprod={deleteprod}/>
     <button onClick={()=>{setPage(page-1)}} disabled={page==1}>Previous</button>
     <button>{page}</button>
     <button  onClick={()=>{setPage(page+1)}} >next</button>
    </div>
  );
};

export { Prodlist }
