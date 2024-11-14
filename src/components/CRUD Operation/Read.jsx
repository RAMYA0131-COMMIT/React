import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Read = () =>{
    const navigate = useNavigate();
    const handleDelete =async (id) =>{
        await axios.delete(`http://localhost:7000/products/${id}`)
        .then(res =>{
            toast.success(res.data.message)
            setData((prevState)=>prevState.filter(value=>value._id !==id))
        }).catch(err =>toast.error(err.res.data.message))
    }

    const [data,setData] = useState([]);                                                                                                    
    
    const fetchFunction = async()=>{
        try{
            await axios.get('http://localhost:7000/products')
            .then(res=>setData(res.data))
            .catch(err=>toast(err.message));
        }catch(err){
          console.log(err);
          
        }
    }
       useEffect(()=>{
               fetchFunction();
        },[]);
        console.log(data,"data");
        

    return(
        <div className="w-full min-h-[100vh] flex flex-col gap-2 p-10">
        <div className="flex justify-end">
            <Link className="px-2 py-1.5 rounded text-white bg-green-400 hover:opacity-85"
             to={`/create`}>Add Form</Link>
</div>
        
        <div className="w-full h-full grid grid-cols-3 p-10 gap-5">
              {data?.map((value)=>(
                <div key={value?._id} className="border border-blue-500 bg-blue-100 flex flex-col gap-2 
                        justify-center items-center rounded p-3">
                   
                    <h1>Name:{value?.name}</h1>
                    <h1>Price:{value?.price}</h1>
                    
                    <div className="w-full flex gap-3">
                <button className="w-1/2 px-2 py-1.5 rounded text-white bg-blue-400 hover:opacity-85" 
                onClick={()=>navigate(`/update/${value._id}`)}>Update</button>
                <button className="w-1/2 px-2 py-1.5 rounded text-white bg-red-400 hover:opacity-85"
                 onClick={()=>handleDelete(value._id)}>Delete</button>
            </div>
                </div>
              ))}
                    </div>
            </div>
    )
}
export default Read;