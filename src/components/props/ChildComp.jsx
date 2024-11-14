import React from "react";
const ChildComp =({btnName,handleFunc,type})=>{
    
    return(
    <button
    className="px-4 py-1.5 bg-blue-500 rounded text-white"
    onClick={handleFunc}
    type="{type}"
    >
        {btnName}
    </button>
);
};
export default ChildComp;
export const ButtonComp2 =({btnName,type})=>{
    console.log(btnName);
    
    return(
    <button
    className="px-4 py-1.5 bg-blue-500 rounded text-white"
     onClick={btnName.handleFunc}
    type="{type}"
    >
        {btnName.btnName}
    </button>
);
};
