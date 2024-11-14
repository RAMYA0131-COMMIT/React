import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ()=>{
const location = useLocation();
//  console.log(location.pathname);
 

//     return(
//         <nav className='w-full h-20 flex justify-evenly items-center bg-blue-100'>
//     <span className='px-4 py-1.5 bg-blue-400 text-white rounded'>
//         <Link to= {'/nav'}>Home</Link>
//         </span>
//     <span className='px-4 py-1.5 bg-blue-400 text-white rounded'>
//         <Link to= {'/nav/About'}>About</Link>
//         </span>
//     <span className='px-4 py-1.5 bg-blue-400 text-white rounded'>
//         <Link to= {'/nav/Contact'}>Contact</Link>
//         </span>
//     <span className='px-4 py-1.5 bg-blue-400 text-white rounded'>
//         <Link to= {'/nav/Service'}>Service</Link>
//         </span>
//     <span className='px-4 py-1.5 bg-blue-400 text-white rounded'>
//         <Link to= {'/nav/Sidebar'}>Sidebar</Link>
//         </span>
//     </nav>
// )

const NavData = [
    {pathName:'/nav',tittle:"Home"},
    {pathName:'/nav/Sidebar',tittle:"Sidebar"},
    {pathName:'/nav/About',tittle:"About"},
    {pathName:'/nav/Contact',tittle:"Contact"},
    {pathName:'/nav/Service',tittle:"Service"},
];
return(
    <nav className='w-full h-20 flex justify-evenly items-center bg-blue-100'>
{
   NavData.map((val,index)=>(
    <span 
    key={index}
    className={`${location.pathname===val.pathName
        ?"bg-green-400 px-4 py-1.5 text-white rounded"
        :"bg-blue-400 px-4 py-1.5 text-white rounded"
    }`}>
        <Link to = {val.pathName}>{val.tittle}</Link>
    </span>
   ))
}
</nav>
)
}
export default Navbar;