import React from "react";
import Button, { ButtonComp2 } from "./ChildComp";


const ParentComp =()=>{
    const btnName = "Reset";

    const handleUpdate =()=>{
        console.log("Update button triger");
        
    };

    const handleSubmit =()=>{
        console.log("Submit button triger");
        
    }
    
   const handleReset =()=>{
    console.log("Reset button triger");
   }

   const handleBack =()=>{
    console.log("back button triger");
   }

    // const handleOnsubmit =(e)=>{
    //    e.preventDefault();
    //     console.log('on submit');
        
    // }
    return(
        <div>
{/*   <form onSubmit={handleOnsubmit}> */}
    <h1 className="text-center mb-4">ParentComp</h1>
<div className="flex gap-4">
    <Button btnName="Update"handleFunc={handleUpdate} type={"submit"}/>
    <Button btnName="Submit" handleFunc={handleSubmit} type={"button"}/>
    
    <ButtonComp2 btnName={{btnName,handleFunc:handleReset}}/>
    <ButtonComp2 btnName={{btnName:"GO Back",handleFunc:handleBack}}/>
</div>
</div>
//  </form>
);
}

export default ParentComp;
