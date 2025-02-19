import React from "react";
import { useLocation } from "react-router-dom";

const Count =({count})=>{
    return(
        <p className="text-center mb-5">Count value - {count}</p>
    )
}

const ButtonComp = ({btnName,handleFunction})=>{
    return( 
    <button onClick={handleFunction}className="px-4 py-1.5 rounded bg-blue-400">{btnName}
    </button>
    );
    
}
 const CounterApp=()=>{
    const [count, setCount] = React.useState(0);

    const location = useLocation();

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
     };

     const handleReset = ()=>{
        setCount(0);
     };
    
     const handleDecrement = () => {
        setCount((prevCount) => prevCount - 1);
     };
 
return(
  <div>
    <Count count={count}/>
    <p>{location.state}</p>
   <div className="flex gap-4">
   <ButtonComp btnName = {"Decrement"}handleFunction={handleDecrement}/>
   <ButtonComp btnName = {"Increment"}handleFunction={handleIncrement}/>
   <ButtonComp btnName = {"Reset"}handleFunction={handleReset}/>
 </div>
</div>
 
);

}
export default CounterApp;


