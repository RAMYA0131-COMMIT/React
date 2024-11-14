import React from "react";
import { useParams } from "react-router-dom";

const Setting = () =>{
    
    const {id} = useParams();
    console.log(id);
    
    
    return <div>Setting pages-{id}</div>
    
}

export default Setting;