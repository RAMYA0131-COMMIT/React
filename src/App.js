// import { useEffect } from 'react';
import './App.css';
import ContextComp, { A, B, C, D } from './components/props/UseContextProvider';



// import CounterApp from './components/CounterApp';
// import ClassBasedComp from './components/ClassBasedComponent';
// import ChildOne from './components/ChildOne';
// import ChildTwo from './components/ChildTwo';
// import ChildThree from './components/ChildThree';
// import FuncBasedComp from './components/FunctionBasedComponent';
// import ParentComp from './components/props/ParentComp';
// import VirtualDom from './components/VirtualDom'
// import { Route,Routes } from 'react-router-dom';

// import EffectExample, { Test } from './components/UseEffectExample';


// function App() {
//   return (
//     <div className="w-full h-screen flex justify-centre items-center">   
//    <ChildOne/>
//    <ChildTwo/>
//    <ChildThree/>     
// </div>
//   );
//  } 

function App() {
return (
  <ContextComp>
    <div className="w-full h-screen flex flex-row gap-2 justify-center items-center">
       {/* <FuncBasedComp /> 
      <ClassBasedComp/> 
      <ParentComp/> 
      <CounterApp/> 
     <h1>App</h1>      
       <VirtualDom/>  */}
      
      {/* <Test /> */}
      
{/* <Routes> */}
  {/* <Route path='/' element={<Test/>}/> */}
  {/* <Route path='/' element={<VirtualDom/>}/> */}
 {/* </Routes>  */}
<A/>
<B/>
<C/>
<D/>
 </div>

 </ContextComp>
  
  );
 }


export default App;



