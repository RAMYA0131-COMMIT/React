import React,{createContext, useContext, useState} from "react";

export const ContextFunction = createContext();

const ContextComp = ({children})=>{
    // const data = "test";
    const [state,setState] = useState("Parent");
    console.log(children);
    
    return <ContextFunction.Provider value={{state,setState}}>
       {children}
    </ContextFunction.Provider>
}

export default ContextComp;

export const A = ()=>{
 const data =  useContext(ContextFunction);
 return (
 <div className="w-[200px] h-[200px] bg-red-200 flex flex-col gap-2 justify-center items-center">
    <h1>A Component-{data.state}</h1>
    <button className="px-4 py-1.5 rounded bg-blue-500"
    onClick={()=>data.setState('A')}>A Button</button>
    </div>
    )
}

export const B = ()=>{
    const {state,setState} =  useContext(ContextFunction);
    return (
        <div className="w-[200px] h-[200px] bg-yellow-100 flex justify-center flex-col gap-2 items-center">
           <h1>B Component-{state}</h1>
           <button className="px-4 py-1.5 rounded bg-green-500"
           onClick={()=>setState('B')}>B Button</button>
           </div>
           )
}

export const C = ()=>{
    const data =  useContext(ContextFunction);
    return (
        <div className="w-[200px] h-[200px] bg-green-100 flex flex-col gap-2 justify-center items-center">
           <h1>C Component-{data.state}</h1>
           <button className="px-4 py-1.5 rounded bg-red-500"
           onClick={()=>data.setState('C')}>C Button</button>
           </div>
           )
        }

export const D = () =>{
    const data =  useContext(ContextFunction);
    return (
        <div className="w-[200px] h-[200px] bg-pink-100 flex flex-col gap-2 justify-center items-center">
           <h1>D Component-{data.state}</h1>
           <button className="px-4 py-1.5 rounded bg-pink-500"
           onClick={()=>data.setState('D')}>D Button</button>
           </div>
           )
}















// props drilling

// const A = ()=>{
//     const data = "test";
//     return <B data={data}/>
// }

// const B = ({data})=>{
//     return <C data = {data}/>
// }

// const C = ({data})=>{
//     return <D data = {data}/>
// }

// const D = ({data}) =>{
//     return <h1>{data}</h1>
// }













