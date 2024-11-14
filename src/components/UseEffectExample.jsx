import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const Test = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        console.log('Component did mount')
    }, [])

    useEffect(() => {
        console.log('Component did update')
    }, [state])

    useEffect(() => {
        return(()=>{
            console.log('Component will Unmount')
        })
       
    }, [])

    console.log('render');


    return (
      <div>
 <h1>TEST</h1>
       
       <button onClick={setState}>trigger</button>
         <Link
         className="text-blue-800" to={'/nav'}>link</Link>

      </div> 
        
    )
}


export default Test;