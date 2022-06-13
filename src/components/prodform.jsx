import React from "react";

const Prodform=({getproddetails})=>{
    const [formData, setFormData] = React.useState({
        title: "",
        gender: "",
        price: "",
        category:"",
        image: ""
      });

      const handleChange = (e) => {
        let { name, value } = e.target;
        console.log(name,value);
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        fetch(`http://localhost:3001/proddata`, {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "content-type": "application/json"
          }
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            getproddetails();
          })
          .catch((err) => {
            console.log(err);
          })
          
      };

    const { title, gender, price,category, image } = formData;
    return (
        <>
           <div>
            <h1></h1>
            <h1></h1>
            <form action="" onSubmit={handleSubmit} style={{border:"1px solid #cecece",width:"25%",margin:"auto",padding:"10px"}}>
                <h2 style={{color:"teal"}}>Product Details Form</h2>
             <input type="text" name="title" placeholder="Title" value={title} onChange={handleChange}/>
             <br/>
             <select name="gender" value={gender} onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
             </select>
             <br/>
             <input type="text" name="price" placeholder="price" value={price} onChange={handleChange}/>
             <br/>
             <input type="text" name="category" placeholder="Category" value={category} onChange={handleChange}/>
             <br/>
             <input type="text" name="image" placeholder="Image" value={image} onChange={handleChange}/>
             <br/>
             <input type="submit" value="submit" />
             </form>
           </div>

        </>
    )
}

export {Prodform}