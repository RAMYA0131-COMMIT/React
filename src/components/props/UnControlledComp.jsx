import React, { useRef } from "react";


const UnControlledComp = ()=>{
  const userNameRef = useRef(null);
  const EmailRef = useRef(null);
  const AddressRef = useRef(null);
  const PhoneNoRef = useRef(null);

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log({userName:userNameRef.current.value,
        Email:EmailRef.current.value,
        Address:AddressRef.current.value,
        PhoneNo:PhoneNoRef.current.value
    });
    userNameRef.current.value='';
    EmailRef.current.value='';
    AddressRef.current.value='';
    PhoneNoRef.current.value='';
    
}

    return(
        <form className="w-full h-screen flex flex-col gap-2 justify-center items-center" onSubmit={handleSubmit}>
            <h1>UnControlledComp</h1>
            <input type="text" 
            ref={userNameRef}
            placeholder="UserName"
            required
             className="p-3 border border-red-400 outline-none rounded"/>

<input type="text" 
            ref={EmailRef}
            placeholder="Email"
            required
             className="p-3 border border-red-400 outline-none rounded"/>

<input type="text" 
            ref={AddressRef}
            placeholder="Address"
            required
             className="p-3 border border-red-400 outline-none rounded"/>

<input type="number" 
            ref={PhoneNoRef}
            placeholder="PhoneNo"
            required
             className="p-3 border border-red-400 outline-none rounded"/>


              <button type="Submit">Submit</button>
              <button type="Reset">Reset</button>
        </form>
    )
}

export default UnControlledComp;