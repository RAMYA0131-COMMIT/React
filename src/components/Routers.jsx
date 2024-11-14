import React from "react";
// import ClassBasedComp from "./ClassBasedComponent";
import CounterApp from './CounterApp';
import Home from "./Home";
import { Route, Routes } from "react-router-dom"
// import App from '../App';

import DashBoardComp from "./SidebarMenu/DashBoardComp";
// import Navbar from "./Navbar";
import About from "./Navbar/About";
import Contact from "./Navbar/Contact";
import Service from "./Navbar/Service"
import Sidebar from "./Navbar/Sidebar";
import Profile from "./SidebarMenu/Profile";
import Register from "./SidebarMenu/Register";
import Category from "./SidebarMenu/Category";
import Setting from "./Setting";
import IndexComp from "./Navbar/IndexComp";
import ListAndKeys from "./Navbar/ListAndKeys";
import ControlledComp from "./props/ControlledComp";
import UnControlledComp from "./props/UnControlledComp";
import Create from "./CRUD Operation/Create";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer}from 'react-toastify';
import Read from "./CRUD Operation/Read";
import Update from "./CRUD Operation/Update";

const Routers = () => {
  return (
      <div>
        {/* <Navbar/> */}
        <div className="w-full">
        <Routes>
           {/* nexted route */}
           <Route index element={<IndexComp/>} />
        {/* <Route path="/" element = {<Home/>}>
        <Route index element={<h1>Home</h1>} />
        <Route path="class" element = {<ClassBasedComp/>} />
        <Route path="function" element = {<CounterApp/>}/>
        </Route> */}

        <Route path="/nav" element = {<Home/>} >
        <Route index element={<h1>Home</h1>} />
        <Route path="/nav/About" element = {<About/>} />

        <Route path="/nav/Sidebar" element = {<Sidebar/>}>
        <Route index element = {<DashBoardComp/>}/>
        <Route path="/nav/Sidebar/Profile" element = {<Profile/>}/>
        <Route path="/nav/Sidebar/Register" element = {<Register/>}/>
        <Route path="/nav/Sidebar/Category" element = {<Category/>}/>
        </Route>

        <Route path="/nav/Contact" element={<Contact />} />
          <Route path="/nav/Service" element={<Service />} />
          </Route>
 
          {/*  Dynamic Route */}

          <Route path="/Setting/:id" element={<Setting />} />

        {/* normal routes */}

           <Route path="/function"  element = {<CounterApp/>} />
           <Route path="/listkeys"  element = {<ListAndKeys/>}/>
            {/* <Route index element={<h1>Home</h1>} /> */}
            {/* <Route path='/class' element={<ClassBasedComp />} />
            <Route path='/function' element={<CounterApp />} /> */}
             
          <Route path = '/control' element={<ControlledComp/>}/>
          <Route path = '/uncontrol' element={<UnControlledComp/>}/>
          <Route path ='/create' element={<Create/>}/>
          <Route path ='/read' element={<Read/>}/>
          <Route path ='/update/:id' element={<Update/>}/>
          <Route path='*' element={<h1>page not found 404</h1>} />

        </Routes>
      </div>
      <ToastContainer/>
      </div>
  );
};

export default Routers;






