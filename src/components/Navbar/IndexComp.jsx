import React from "react";
import { Link, useNavigate } from "react-router-dom";

const IndexComp = () =>{
   
  const check   =useNavigate();
  const data = "data from Index Component"
  const role = "user";

  const handleNavigate = ()=>{
    if(role==='user'){
        check('/function',{ state:data});
    }
    else{
        check('/class')
    }
  };
   
    return(
        <div className="w-full h-screen flex justify-center items-center flex-col gap-4">
            <Link to = {"/function"} state={data}>
            Navigate to link element
            </Link>
            <Link to = {"/function"}>Navigate element</Link>
            <button onClick={handleNavigate}>Use navigate to element </button>
        </div>
    )
}

export default IndexComp;