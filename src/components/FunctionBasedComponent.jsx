import { useState } from "react";

function FuncBasedComp() {
 const [count, setCount] = useState(0);

 const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
 };

 const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
 };

 return (
    <div>
    <p className="text-center mb-5 text-4xl font-bold">{count}</p>
    <div className="flex gap-4">
    <button
    onClick={handleDecrement}
    className="px-4 py-1.5 rounded bg-blue-200">

    Decrement
    </button>
    <button
    onClick={handleIncrement}
    className="px-4 py-1.5 rounded bg-green-200"
    >
    Increment
    </button>
    </div>
    </div>
 );
 }



export default FuncBasedComp;