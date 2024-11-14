import React from "react";
import { useState } from "react";

const ControlledComp =()=>{
const [userName,setUserName]=useState("Ramya");
const [userEmail,setUserEmail]=useState("Ramya@gmail.com");
const [userPassword,setUserPassword]=useState("12345ABCD");
const [userMobileNo,setUserMobileNo]=useState(1234567890);

// console.log(userName,userEmail,userPassword,userMobileNo);

  const handleName=(event)=>{
    setUserName(event.target.value);
  }
  const handleEmail=(event)=>{
    setUserEmail(event.target.value)
  }
  const handlePassword=(event)=>{
    setUserPassword(event.target.value)
     }
const handleMobile=(event)=>{
    setUserMobileNo(event.target.value)
}
const handleSumbit=()=>{
  console.log(userName,userEmail,userPassword,userMobileNo);
}
    // setFormData(event.target.value)
  
  
  
    return(
        <div className="w-full h-screen flex flex-col gap-2 justify-center items-center">
            {/* <p>{formData}</p> */}
            <input type="text" value={userName} onChange={handleName} 
             className="border border-red-400 outline-none rounded"/>

             <input type="text" value={userEmail} onChange={handleEmail} 
             className="border border-red-400 outline-none rounded"/>

             <input type="text" value={userPassword} onChange={handlePassword} 
             className="border border-red-400 outline-none rounded"/>

             <input type="text" value={userMobileNo} onChange={handleMobile} 
             className="border border-red-400 outline-none rounded"/>

            <button onClick={handleSumbit} className="bg-pink-300 w-20 h-10">Submit</button>
        </div>
    )
}

export default ControlledComp;