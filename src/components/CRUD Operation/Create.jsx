import axios from "axios"
import React, { useState } from "react";
import{toast}from 'react-toastify';

const Create =()=>{
    const initialState = { 
        name:'',
        price:'',
          };
    const [formData,setFormData]=useState(initialState);
    const handleChange= (event)=>{
      console.log("name:"+event.target.name,"Value:"+event.target.value);
      const{name,value}=event.target;
      setFormData((prevState)=>({...prevState,[name]:value}));
    };

    const handleSubmit=async(e)=>{
        e.preventDefault();
        // console.log(formData);
        // setFormData(initialState);  //sumbit clicked automatic reset trigger refresh
    try{
        await axios
        .post('http://localhost:7000/products',formData)
        .then((res)=>{
            if (res.data){
                setFormData(initialState);
                toast.success("Novels created sucessfully")
            }
        })
        .catch(err=>console.log(err));
    }catch(error){
        console.log(error);
        
    }
    };
// console.log(formData);

   return(
    <div className="w-full h-screen flex flex-col gap-5 justify-center items-center">
        <h1 className="text-2xl">create component</h1>

        <form onSubmit={handleSubmit} onReset={()=>setFormData(initialState)} className="flex flex-col gap-5">

        <input 
        type="text" 
        value={formData.name}
         placeholder="Name"
         name="name"
        //  onChange={(event)=>
        //     setFormData({...formData ,Name:event.target.value})} 
         onChange={handleChange}  
             className="p-3 border border-gray-400 outline-none rounded"/> 

             <input 
             type="number" 
             value={formData.price}
             placeholder="Price"
             name="price"
            //   onChange={(event)=>setFormData({
            //    ...formData , number:event.target.value
            //   })} 
            onChange={handleChange}
             className="p-3 border border-gray-400 outline-none rounded"/>    

        <div className="w-full flex gap-4">
            <button className="w-1/2 px-3 py-1.5 rounded text-white bg-blue-400 hover:opacity-85"type="reset">Reset</button>
            <button  className="w-1/2 px-3 py-1.5 rounded text-white bg-blue-400 hover:opacity-85"type="submit">Submit</button>
        </div>

        </form>

    </div>
   )
}

export default Create;