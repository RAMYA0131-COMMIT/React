import React from "react";
import { Link } from "react-router-dom";

const SidebarMenuComp = ()=>{
    return(
        
             <div className='w-30 h-full flex  flex-col gap-5'>
    <span className='px-4 py-1.5 bg-blue-400 text-white rounded'>
        <Link to= {'/nav'}>Home</Link>
        </span>
    <span className='px-4 py-1.5 bg-blue-400 text-white rounded'>
        <Link to= {'/nav/About'}>About</Link>
        </span>
    <span className='px-4 py-1.5 bg-blue-400 text-white rounded'>
        <Link to= {'/nav/Sidebar'}>Sidebar</Link>
        </span>
    <span className='px-4 py-1.5 bg-blue-400 text-white rounded'>
        <Link to= {'/nav/Contact'}>Contact</Link>
        </span>
    <span className='px-4 py-1.5 bg-blue-400 text-white rounded'>
        <Link to= {'/nav/Service'}>Service</Link>
        </span>
        <span className='px-4 py-1.5 bg-blue-400 text-white rounded'>
        <Link to= {'/nav/Sidebar/Profile'}>Profile</Link>
        </span>
        <span className='px-4 py-1.5 bg-blue-400 text-white rounded'>
        <Link to= {'/nav/Sidebar/Register'}>Register</Link>
        </span>
        <span className='px-4 py-1.5 bg-blue-400 text-white rounded'>
        <Link to= {'/nav/Sidebar/Category'}>Category</Link>
        </span>
    
    </div>  
        
    )
}

export default SidebarMenuComp;